const mongoose = require('mongoose')
const userModel = mongoose.model("userData", new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "last name is required"],
  },
  phone: {
    type: String,
    required: [true, "phone no is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  address: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: [true, "if physically handicapped"]
  },
},
  { timestamp: true }
))
