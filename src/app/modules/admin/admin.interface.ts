import { Model } from 'mongoose'

export type IAdmin = {
  password: string
  role: string
  name: {
    firstName: string
    lastName: string
  }
  phoneNumber: number
  address: string
}
export type AdminModel = Model<IAdmin, Record<string, unknown>>
