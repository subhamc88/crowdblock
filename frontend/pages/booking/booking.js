const department = document.getElementById("department")
const hospital = document.getElementById("hospital")
const submit = document.getElementById("submit")
hospital.addEventListener("change", () => {
  department.style.display = "block";
});
department.addEventListener("change", () => {
  submit.style.display = "block";
});
