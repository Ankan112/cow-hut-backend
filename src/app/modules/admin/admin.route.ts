import express from 'express'
import { AdminController } from './admin..controller'
const router = express.Router()

router.post('/create-admin', AdminController.createAdmin)
router.post('/login', AdminController.loginAdmin)
router.post('/refresh-token', AdminController.refreshToken)

export const AdminRouters = router
