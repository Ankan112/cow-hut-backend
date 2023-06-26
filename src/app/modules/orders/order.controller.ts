import { RequestHandler } from 'express'
import { OrderService } from './order.services'

const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const { order } = req.body
    const result = await OrderService.createOrder(order)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Order created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getAllOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.getAllOrder()
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Orders retrieved successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const OrderController = {
  createOrder,
  getAllOrder,
}
