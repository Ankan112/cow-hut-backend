import { RequestHandler } from 'express'
import { AdminService } from './admin.services'

const createAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { admin } = req.body
    const result = await AdminService.createAdmin(admin)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Admin created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const AdminController = {
  createAdmin,
}
