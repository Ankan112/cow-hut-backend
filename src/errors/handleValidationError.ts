import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/common'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError

// const handleValidationError = (err: mongoose.Error.ValidationError): IGenericErrorMessage[] => {
//     const errors: IGenericErrorMessage[] = Object.values(err.errors).map((el: mongoose.Error.ValidationError) => {
//         return {
//             path: el?.path,
//             message: el?.message
//         };
//     });

//     return errors;
// };
