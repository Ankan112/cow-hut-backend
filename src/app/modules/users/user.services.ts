import { User } from './user.model'
import { IUser } from './user.interface'
// import config from '../../../config/index'
// import { generatedUserId } from './user.utiles'
import ApiError from '../../../errors/ApiError'

// Create a new user service function
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

// Get single user service function
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id)
  return result
}

// Get all users service function
const getAllUsers = async (): Promise<IUser[] | null> => {
  const result = await User.find()
  return result
}

// Delete user service function
const deleteUser = async (id: string) => {
  const result = await User.deleteOne({ _id: id })
  return result
}

// Update user service function
const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const UserService = {
  createUser,
  getSingleUser,
  getAllUsers,
  deleteUser,
  updateUser,
}
