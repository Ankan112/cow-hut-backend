import { UserRole } from '../../../enums/commonEnums'

export type ILoginUser = {
  phoneNumber: string
  password: string
}

export type ILoginUserResponse = {
  accessToken: string
  refreshToken?: string
}

export type IRefreshTokenResponse = {
  accessToken: string
}

export type IVerifiedLoginUser = {
  phoneNumber: number
  role: UserRole
}
