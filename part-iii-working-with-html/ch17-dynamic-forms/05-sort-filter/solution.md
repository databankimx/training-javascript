## Solution

```javascript
function render() {
  const query = filter.value.toLowerCase();
  body.replaceChildren();
  data.filter(row => row.description.toLowerCase().includes(query))
    .sort((a, b) => descending ? b.amount - a.amount : a.amount - b.amount)
    .forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.code}</td><td>$${row.amount.toFixed(2)}</td><td></td>`;
      tr.lastElementChild.textContent = row.description;
      body.append(tr);
    });
}
```

The data stays intact. Only the rendered view changes.

---
