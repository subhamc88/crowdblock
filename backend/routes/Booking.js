const router = require('express').Router()

const path = require('path')

const opt = { root: path.join(__dirname, "../../frontend/pages/booking") };

router.get('/', (req, res) => {
  res.sendFile('booking.html', opt)
})
router.post('/', (req, res) => {
  console.log(res.body)
})
module.exports = router
