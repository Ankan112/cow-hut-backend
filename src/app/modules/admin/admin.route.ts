import express from 'express'
import { AdminController } from './admin..controller'
const router = express.Router()

router.post('/create-admin', AdminController.createAdmin)
// router.get('/users', UserController.getAllUsers)

export const AdminRouters = router
