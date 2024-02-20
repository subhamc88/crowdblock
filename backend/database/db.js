const mongoose = require('mongoose')

const db = async () => {
  await mongoose.connect("mongodb://localhost:27017/")
    .then(await mongoose.connection.once('open', () => console.log(`Database Connected`)))
  await mongoose.connection.on('error', (error) => console.log(error))
}

module.exports = db
