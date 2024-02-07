// Imported Modules
import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/Auth.js'

// Local variables
const port = 3001
const db = mongoose.connection
const app = express()
const __dirname = path.dirname('../')
const opt = { root: path.join(__dirname, '../frontend/pages/home') }

// Middleware
app.use(
  cors({
    origin: '*',
    Credential: 'true',
  })
)
app.use('/', express.static("../frontend/pages/"))
app.use('/auth', authRouter)

// Env Configuration
dotenv.config()

// Default Page
app.get('/', (req, res) => {
  res.sendFile('home.html', opt)
})

// DataBase
mongoose.connect(process.env.DB_URL)
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Database connected") })

// Port Connection
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`)
})
