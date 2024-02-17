const router = require("express").Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/dashboard-user") };

router.get('/', (req, res) => {
  res.send('router')
  res.sendFile('dashboard-user.html', opt)
})
module.exports = router
