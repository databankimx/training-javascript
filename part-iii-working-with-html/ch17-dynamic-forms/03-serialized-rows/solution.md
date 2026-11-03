## Solution

```javascript
function writeData() {
  lines = [...body.querySelectorAll("tr")].map(row => ({
    poNumber: row.querySelector("[data-field=poNumber]").value,
    glCode: row.querySelector("[data-field=glCode]").value,
    amount: row.querySelector("[data-field=amount]").value,
    description: row.querySelector("[data-field=description]").value
  }));
  dataField.value = JSON.stringify(lines);
  debug.textContent = dataField.value;
}
```

The hidden field is updated from the visible controls before a save. If OnBase retrieves the form later, it can merge the hidden value before rendering, and the load-time script can rebuild the rows from it.

---
