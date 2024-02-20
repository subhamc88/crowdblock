// Imported Modules
// Dependencies
const express = require('express')
const path = require('path')
const cors = require('cors')
const db = require('./database/db.js')
//Routes
const authRouter = require('./routes/Auth.js')
const bookingRouter = require('./routes/Booking.js')
const paymentRouter = require('./routes/Payment.js')

// Local variables
const app = express()
const port = 3001
const opt = { root: path.join(__dirname, '../frontend/pages/home') }
db()

// Middleware

app.use(
  cors({
    origin: '*',
    Credential: 'true',
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static("../frontend/pages/"))
app.use('/auth', authRouter)
app.use('/booking', bookingRouter)
app.use('/payment', paymentRouter)
//app.use('/dashboard:id', dashboardRouter)
// Default Page
app.get('/', (req, res) => {
  res.sendFile('home.html', opt)
})

// Port Connection
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`)
})
