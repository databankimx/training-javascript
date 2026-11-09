const body = document.querySelector("#gl-body");
const dataField = document.querySelector("#mikgData");
const debug = document.querySelector("#debug");
let lines = [];

function readData() {
  try {
    return JSON.parse(dataField.value || "[]");
  }
  catch (error) {
    debug.textContent = `Could not read saved rows: ${error.message}`;
    return [];
  }
}

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

function render() {
  body.replaceChildren();
  lines.forEach((line, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input data-field="poNumber" aria-label="PO number ${index + 1}"></td>
      <td><input data-field="glCode" aria-label="GL code ${index + 1}"></td>
      <td><input data-field="amount" aria-label="GL amount ${index + 1}"></td>
      <td><input data-field="description" aria-label="GL description ${index + 1}"></td>
      <td><button type="button" class="remove">Delete</button></td>
    `;

    Object.entries(line).forEach(([key, value]) => {
      row.querySelector(`[data-field=${key}]`).value = value;
    });

    row.querySelector(".remove").addEventListener("click", () => {
      writeData();
      lines.splice(index, 1);
      render();
      writeData();
    });
    body.append(row);
  });
}

document.querySelector("#add").addEventListener("click", () => {
  writeData();
  lines.push({ poNumber: "", glCode: "", amount: "", description: "" });
  render();
});
document.querySelector("#save").addEventListener("click", writeData);
document.querySelector("#add-note").addEventListener("click", () => {
  const notes = document.querySelector("#notes");
  const text = notes.value.trim();
  if (!text) return;
  const item = document.createElement("li");
  item.textContent = text;
  document.querySelector("#note-list").append(item);
  notes.value = "";
});
lines = readData();
render();
