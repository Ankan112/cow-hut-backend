import { IOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (order: IOrder): Promise<IOrder> => {
  const createdOrder = await Order.create(order)
  return createdOrder
}

const getAllOrder = async (): Promise<IOrder[] | null> => {
  const result = await Order.find()
  return result
}

export const OrderService = {
  createOrder,
  getAllOrder,
}
