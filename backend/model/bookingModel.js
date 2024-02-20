const mongoose = require('mongoose')
const userBookingModel = mongoose.model("appointment", new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  docName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  timeslot: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
},
  { timestamp: true }
))
modules.exports = userBookingModel
