const router = require('express').Router()
const path = require('path')
const opt = { root: path.join(__dirname, "../../frontend/pages/payment") };

router.get('/', (req, res) => {
  res.sendFile('payment.html', opt)
})
module.exports = router
