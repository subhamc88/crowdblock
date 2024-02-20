const router = require('express').Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/authentication") }

router.get('/', (req, res) => {
  res.sendFile('login.html', opt)
})

router.post('/', (req, res) => {
  console.log(res.body.email)
  console.log(res.body.password)
})

module.exports = router
