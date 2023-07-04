import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
// import ApiError from '../../../errors/ApiError'
import { IAdmin } from './admin.interface'
import { Admin } from './admin.model'
import bcrypt from 'bcrypt'
import ApiError from '../../../errors/ApiError'
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from '../auth/auth.model'

const createAdmin = async (admin: IAdmin): Promise<IAdmin> => {
  // hash password
  admin.password = await bcrypt.hash(
    admin.password,
    Number(config.bcrypt_salt_rounds)
  )
  const createdAdmin = await Admin.create(admin)
  return createdAdmin
}

const loginAdmin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { phoneNumber, password } = payload

  if (!phoneNumber || !password) {
    throw new ApiError(400, 'Phone number and Password are required')
  }

  const isUserExist = await Admin.findOne(
    { phoneNumber },
    { phoneNumber: 1, password: 1 }
  ).lean()
  if (!isUserExist) {
    throw new ApiError(404, 'Admin does not exist')
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password
  )

  if (!isPasswordMatched) {
    throw new ApiError(400, 'Password is incorrect')
  }

  // create access token
  const { _id, role } = isUserExist
  const accessToken = jwtHelpers.createToken(
    { _id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  )

  const refreshToken = jwtHelpers.createToken(
    { _id, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  )

  return {
    accessToken,
    refreshToken,
  }
}

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //verify token
  // invalid token - synchronous
  let verifiedToken = null
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    )
  } catch (err) {
    throw new ApiError(403, 'Invalid Refresh Token')
  }

  const { _id } = verifiedToken
  const isUserExist = await Admin.findOne({ _id }).lean()
  if (!isUserExist) {
    throw new ApiError(404, 'Admin does not exist')
  }
  //generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist._id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  )

  return {
    accessToken: newAccessToken,
  }
}

export const AdminService = {
  createAdmin,
  loginAdmin,
  refreshToken,
}
