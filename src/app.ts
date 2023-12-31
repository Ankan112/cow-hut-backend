import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler'
import { UserRouters } from './app/modules/users/user.route'
import { CowRouters } from './app/modules/cows/cow.route'
import { OrderRouters } from './app/modules/orders/order.route'
import { AdminRouters } from './app/modules/admin/admin.route'
import { AuthRoutes } from './app/modules/auth/auth.route'
import cookieParser from 'cookie-parser'
const app: Application = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
console.log(app.get('env'))
app.use('/api/v1/', UserRouters)
app.use('/api/v1', CowRouters)
app.use('/api/v1/', OrderRouters)
app.use('/api/v1/admins', AdminRouters)
app.use('/api/v1/auth', AuthRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// global error handler
app.use(globalErrorHandler)

export default app
