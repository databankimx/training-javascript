## Solution

```javascript
const departments = [
  { value: "claims", label: "Claims" },
  { value: "hr", label: "Human Resources" },
  { value: "it", label: "Information Technology" }
];

const placeholder = document.createElement("option");
placeholder.value = "";
placeholder.textContent = "Choose a department";
placeholder.selected = true;
placeholder.disabled = true;
department.append(placeholder);

departments.forEach(item => {
  const option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.label;
  department.append(option);
});
```

The object keeps the submitted value separate from the label. The placeholder is selected initially and cannot be chosen as a valid department later.

```text
Choose a department
Claims
Human Resources
Information Technology
```

---
