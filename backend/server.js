// Imported Modules
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

// Local variables
const port = 3001
const db = mongoose.connection
const app = express()

// Env Config
dotenv.config()

// CORS
app.use(
  cors({ origin: true, })
)

// DataBase
mongoose.connect(process.env.DB_URL)

db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Database connected") })

// Port Connection
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`)
})
