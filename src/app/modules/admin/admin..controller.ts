import { RequestHandler } from 'express'
import { AdminService } from './admin.services'
import config from '../../../config'

const createAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { admin } = req.body
    const result = await AdminService.createAdmin(admin)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Admin created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const loginAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { ...loginData } = req.body
    const result = await AdminService.loginAdmin(loginData)
    const { refreshToken, ...others } = result

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Admin logged in successfully',
      data: others,
    })
  } catch (err) {
    next(err)
  }
}

const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies
    const result = await AdminService.refreshToken(refreshToken)

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'New access token generated successfully !',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const AdminController = {
  createAdmin,
  loginAdmin,
  refreshToken,
}
