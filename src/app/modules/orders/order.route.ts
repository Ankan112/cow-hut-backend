import express from 'express'
import { OrderController } from './order.controller'
import { UserRole } from '../../../enums/commonEnums'
import auth from '../users/middlewares/auth'
const router = express.Router()

router.post('/orders', auth(UserRole.BUYER), OrderController.createOrder)
router.get(
  '/orders',
  auth(UserRole.ADMIN, UserRole.SELLER, UserRole.BUYER),
  OrderController.getAllOrder
)

export const OrderRouters = router
