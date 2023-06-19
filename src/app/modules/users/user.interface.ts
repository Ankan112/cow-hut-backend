import { Model } from 'mongoose'

export type IUser = {
  phoneNumber: number
  role: string
  password: string
  name: {
    firstName: string
    lastName: string
  }
  address: string
  budget?: number
  income?: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
