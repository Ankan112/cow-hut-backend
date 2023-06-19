import { User } from './user.model'
import { IUser } from './user.interface'
// import config from '../../../config/index'
// import { generatedUserId } from './user.utiles'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser> => {
  // auto generated incremental id
  // const id = await generatedUserId()
  // user.id = id
  // default password

  if (!user.income) {
    user.income = 0
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
