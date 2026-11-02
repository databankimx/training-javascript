const body = document.querySelector("#gl-body");
const subtotal = document.querySelector("#subtotal");
let rows = [];

function updateTotal() {
  const total = rows.reduce((sum, row) => sum + Number(row.amount.value || 0), 0);
  subtotal.textContent = `$${total.toFixed(2)}`;
}

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

document.querySelector("#add-row").addEventListener("click", addRow);
document.querySelector("#add-note").addEventListener("click", () => {
  const notes = document.querySelector("#notes");
  const text = notes.value.trim();
  if (!text) return;
  const item = document.createElement("li");
  item.textContent = text;
  document.querySelector("#note-list").append(item);
  notes.value = "";
});
addRow();
