const mongoose = require('mongoose')

const db = async () => {
  await mongoose.connect("mongodb+srv://subhamc88:subham2004@userdata.unfcofh.mongodb.net/?retryWrites=true&w=majority")
    .then(await mongoose.connection.once('open', () => console.log(`Database Connected`)))
  await mongoose.connection.on('error', (error) => console.log(error))
}

module.exports = db
