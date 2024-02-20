import axios from "axios"

const formSubmit = async (event) => {
  event.preventDefault()
  const email = document.getElementById(email)
  const res = await axios.post('/auth', {
    email: "email",
    password: "password",
  })
}
