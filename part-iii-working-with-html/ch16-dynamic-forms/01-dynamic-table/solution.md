## Solution

```javascript
function addRow() {
  const row = document.createElement("tr");
  row.innerHTML = `<td><input aria-label="PO number"></td><td><input aria-label="GL code"></td><td><input class="amount" type="number" step="0.01" aria-label="GL amount"></td><td><input aria-label="GL description"></td><td><button type="button" class="remove">Remove</button></td>`;
  const amount = row.querySelector(".amount");
  row.querySelector(".remove").addEventListener("click", () => {
    rows = rows.filter(item => item.row !== row);
    row.remove();
    updateTotal();
  });
  amount.addEventListener("input", updateTotal);
  body.append(row);
  rows.push({ row, amount });
  updateTotal();
}
```

The solution wires each new row as soon as it exists. That is fine for a small page, but every row now has its own listeners and every row is created after the original HTML was parsed. The next lesson explains why that distinction matters in OnBase e-forms.

The Add Note button follows the safe comments-form pattern. It creates an `li` and assigns `textContent`, so a note containing `<script>` is displayed as text rather than executed.

---
