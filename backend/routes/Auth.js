const router = require('express').Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/authentication") }

router.get('/', (req, res) => {
  res.sendFile('login.html', opt)
})

module.exports = router
