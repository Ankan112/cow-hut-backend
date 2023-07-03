import { NextFunction, Request, Response } from 'express'
import { Secret } from 'jsonwebtoken'
import ApiError from '../../../../errors/ApiError'
import { jwtHelpers } from '../../../../helpers/jwtHelpers'
import config from '../../../../config'

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization
      console.log(token)
      if (!token) {
        throw new ApiError(401, 'You are not authorized')
      }
      // verify token
      let verifiedUser = null

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret)

      req.user = verifiedUser
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(403, 'Forbidden')
      }
      next()
    } catch (error) {
      next(error)
    }
  }

export default auth
