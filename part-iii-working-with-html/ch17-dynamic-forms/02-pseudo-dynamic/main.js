const rows = [...document.querySelectorAll(".dyn-row")];
let visibleRows = 1;

function renderRows() {
  rows.forEach((row, index) => { row.hidden = index >= visibleRows; });
  document.querySelector("#status").textContent = `${visibleRows} of ${rows.length} rows visible.`;
}

document.querySelector("#add").addEventListener("click", () => {
  if (visibleRows < rows.length) visibleRows += 1;
  renderRows();
});

document.querySelector("#remove").addEventListener("click", () => {
  if (visibleRows > 1) {
    rows[visibleRows - 1].querySelectorAll("input").forEach(input => { input.value = ""; });
    visibleRows -= 1;
  }
  renderRows();
});

document.querySelector("#add-note").addEventListener("click", () => {
  const notes = document.querySelector("#notes");
  const text = notes.value.trim();
  if (!text) return;
  const item = document.createElement("li");
  item.textContent = text;
  document.querySelector("#note-list").append(item);
  notes.value = "";
});

renderRows();
