// Imported Modules
const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose').connect("mongodb+srv://subhamc88:subham2004@userdata.unfcofh.mongodb.net/?retryWrites=true&w=majority")
const db = require('mongoose').connection
const authRouter = require('./routes/Auth.js')
const bookingRouter = require('./routes/Booking.js')
const userDashboardRouter = require('./routes/UserDashboard.js')
const doctorDashboardRouter = require('./routes/DoctorDashboard.js')


// Local variables
const app = express()
const port = 3001
const opt = { root: path.join(__dirname, '../frontend/pages/home') }

// Middleware

app.use(
  cors({
    origin: '*',
    Credential: 'true',
  })
)
app.use(express.json())
app.use('/', express.static("../frontend/pages/"))
app.use('/auth', authRouter)
app.use('/booking', bookingRouter)
app.use('/user-dashboard',userDashboardRouter)
app.use('/doc-dashboard',doctorDashboardRouter)

// Default Page
app.get('/', (req, res) => {
  res.sendFile('home.html', opt)
})

// DataBase
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Database connected") })

// Port Connection
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`)
})
