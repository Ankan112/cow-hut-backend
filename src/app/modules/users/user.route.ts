import express from 'express'
import { UserController } from './user.controller'
import auth from './middlewares/auth'
import { UserRole } from '../../../enums/commonEnums'
const router = express.Router()

router.post('/auth/signup', UserController.createUser)
router.get('/users/:id', auth(UserRole.ADMIN), UserController.getSingleUser)
router.patch('/users/:id', auth(UserRole.ADMIN), UserController.updateUser)
router.delete('/users/:id', auth(UserRole.ADMIN), UserController.deleteUser)
router.get('/users', auth(UserRole.ADMIN), UserController.getAllUsers)

export const UserRouters = router
