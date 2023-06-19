import { IGenericErrorMessage } from './error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export enum UserRole {
  SELLER = 'seller',
  BUYER = 'buyer',
}
