const department = document.getElementById("department")
const hospital = document.getElementById("hospital")
const submit = document.getElementById("submit")
const form = document.getElementById("booking")

hospital.addEventListener("change", () => {
  department.style.display = "block";
});
department.addEventListener("change", () => {
  submit.style.display = "block";
});
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  console.log(formData)
  const urlEncoded = new URLSearchParams(formData).toString()
  fetch('/booking', {
    method: "post",
    body: "urlEncoded",
    headers: {
      'content-type': 'json'
    }
  })
})
