import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler'
import { UserRouters } from './app/modules/users/user.route'
import { CowRouters } from './app/modules/cows/cow.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
console.log(app.get('env'))
app.use('/api/v1/', UserRouters)
app.use('/api/v1', CowRouters)

//testing
// app.get('/', (req: Request, res: Response):void => {
// //   next('Ore baba error hoiche ki korbo')
//   res.send('Hello World!')
// //   Promise.reject(new Error('Unhandled promise rejection'))
// //   console.log(x)
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// global error handler
app.use(globalErrorHandler)

export default app
