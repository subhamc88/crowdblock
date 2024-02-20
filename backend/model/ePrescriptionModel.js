const mongoose = require('mongoose')
const ePrescriptionModel = mongoose.model("prescription", new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  address: {
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
  prescriptionDate: {
    type: String,
    required: true,
  },
  medicationDetails: {
    type: String,
    required: [true, "name of the medicine, doses required,doses timing are to be filled"],
  },
  specialInformation: {
    type: String,
  },
  time: {
    type: String,
    required: true,
  },
},
  { timestamp: true }
))
