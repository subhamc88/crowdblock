const mongoose = require('mongoose')

const doctorModel = mongoose.model("doctorsData", new mongoose.Schema(
  {
    docId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    gender: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timing: {
      type: String,
      required: [true, "wrok timing is required"],
    },
    workplace: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
))
module.exports = doctorModel
