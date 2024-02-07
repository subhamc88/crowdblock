import axios from "axios"

const formSubmit = async (event) => {
  event.preventDefault()
  const email = document.getElementById(email)
  const password = document.getElementById(password)
  const res = await axios('http://localhost:3001/auth', { email: email, password: password })
  console.log(res.data)
}
