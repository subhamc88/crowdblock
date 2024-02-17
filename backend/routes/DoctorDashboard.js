const router = require('express').Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/DoctorDashboard") };

router.get('/', (req, res) => {
  res.send('router')
  res.sendFile('DoctorDashboard.html', opt)
})
module.exports = router