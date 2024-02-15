const department = document.getElementById("department")
const hospital = document.getElementById("hospital")

department.addEventListener("change", () => {
  hospital.style.display = "block";
});
