import { RequestHandler } from 'express'
import { AuthService } from './auth.services'
import config from '../../../config'

const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const { ...loginData } = req.body
    const result = await AuthService.loginUser(loginData)
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
      message: 'User login successfully',
      data: others,
    })
  } catch (err) {
    next(err)
  }
}
const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies
    const result = await AuthService.refreshToken(refreshToken)

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const AuthController = {
  loginUser,
  refreshToken,
}
