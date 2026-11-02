## Solution

```javascript
const rows = [...document.querySelectorAll(".dyn-row")];
let visibleRows = 1;

function renderRows() {
  rows.forEach((row, index) => {
    const hasData = [...row.querySelectorAll("input")].some(input => input.value.trim() !== "");
    row.hidden = index >= visibleRows && !hasData;
    if (!row.hidden) visibleRows = Math.max(visibleRows, index + 1);
  });
}

renderRows();
```

The important point is not the loop. It is that every possible OnBase field still exists in the original HTML. The script only decides which existing rows should be visible.

---
