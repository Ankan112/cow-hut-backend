import { RequestHandler } from 'express'
import { UserService } from './user.services'

// create new user
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    console.log(req.cookies, 'cookie')
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
// Get single user
const getSingleUser: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await UserService.getSingleUser(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User retrieved successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Get all users
const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.getAllUsers()
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Users retrieved successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Delete User
const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await UserService.deleteUser(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User deleted successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

// Update User
const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const payload = req.body
    const result = await UserService.updateUser(id, payload)

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User updated successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser,
  getSingleUser,
  getAllUsers,
  deleteUser,
  updateUser,
}
