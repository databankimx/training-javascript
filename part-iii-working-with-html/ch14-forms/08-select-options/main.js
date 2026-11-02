const department = document.querySelector("#department");
const status = document.querySelector("#status");
const departments = ["Claims", "Human Resources", "Information Technology"];

departments.forEach(name => {
  const option = document.createElement("option");
  option.value = name.toLowerCase().replaceAll(" ", "-");
  option.textContent = name;
  department.append(option);
});

department.addEventListener("change", () => {
  status.textContent = `Selected: ${department.value}`;
});
