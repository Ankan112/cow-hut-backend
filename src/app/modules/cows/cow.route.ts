import express from 'express'
import { CowController } from './cow.controller'
import auth from '../users/middlewares/auth'
import { UserRole } from '../../../enums/commonEnums'
const router = express.Router()

router.post('/cows', auth(UserRole.SELLER), CowController.createCow)
router.get(
  '/cows/:id',
  auth(UserRole.BUYER, UserRole.SELLER, UserRole.ADMIN),
  CowController.getSingleCow
)
router.delete('/cows/:id', auth(UserRole.SELLER), CowController.deleteCow)
router.patch('/cows/:id', auth(UserRole.SELLER), CowController.updateCow)
router.get(
  '/cows',
  auth(UserRole.BUYER, UserRole.SELLER, UserRole.ADMIN),
  CowController.getAllCow
)

export const CowRouters = router
