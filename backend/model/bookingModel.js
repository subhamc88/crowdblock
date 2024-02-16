const mongoose = require('mongoose')
const userBookingModel = mongoose.model("appointment", new mongoose.Schema({
  userName: {
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
  time: {
    type: String,
    required: true,
  },
},
  { timestamp: true }
))
