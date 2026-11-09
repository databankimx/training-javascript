# Solution

```javascript
const checked = $("input:checked").length;
const region = $("#region option:selected").text();

$("#output").text(`Checked: ${checked}; Region: ${region}`);
console.log(`Checked: ${checked}`);
```

The selectors inspect the current state of the controls. That means the same code continues to work after the user checks a box or chooses another option.

```text
Checked: 1
Region: Central
```

---
