const router = require('express').Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/dashboard") };

router.get('/user', (req, res) => {
  res.sendFile('dashboard-user.html', opt)
})

module.exports = router
