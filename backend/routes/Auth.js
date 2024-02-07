import express from 'express'
import path from 'path'

const router = express.Router()
const __dirname = '../'
const opt = { root: path.join(__dirname, "frontend/pages/authentication") }

router.use(express.static('../frontend/pages/'))

router.get('/', (req, res) => {
  res.sendFile('login.html', opt)
})

router.post('/', (req, res) => {
  console.log(req.params.data)
})
export default router
