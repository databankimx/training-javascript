const data = [{ code: "24", amount: 300, description: "Furnace Filters" }, { code: "65", amount: 700, description: "Food Rakes" }, { code: "81", amount: 125, description: "Office supplies" }];
const body = document.querySelector("#body");
let descending = true;
function render() { const query = document.querySelector("#filter").value.toLowerCase(); body.replaceChildren(); data.filter(row => row.description.toLowerCase().includes(query)).sort((a, b) => descending ? b.amount - a.amount : a.amount - b.amount).forEach(row => { const tr = document.createElement("tr"); tr.innerHTML = `<td>${row.code}</td><td>$${row.amount.toFixed(2)}</td><td></td>`; tr.lastElementChild.textContent = row.description; body.append(tr); }); }
document.querySelector("#filter").addEventListener("input", render); document.querySelector("#sort").addEventListener("click", () => { descending = !descending; render(); }); render();
