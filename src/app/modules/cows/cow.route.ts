import express from 'express'
import { CowController } from './cow.controller'
const router = express.Router()

router.post('/cows', CowController.createCow)
router.get('/cows/:id', CowController.getSingleCow)
router.delete('/cows/:id', CowController.deleteCow)
router.patch('/cows/:id', CowController.updateCow)
router.get('/cows', CowController.getAllCow)

export const CowRouters = router
