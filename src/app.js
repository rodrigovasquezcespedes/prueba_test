import express from 'express'
import cafesRoutes from './routes/cafesRoutes.js'

const app = express()

app.use(express.json())
app.use('/', cafesRoutes)

export default app
