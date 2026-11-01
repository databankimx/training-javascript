const count = document.querySelector("#count");
let value = 0;
document.querySelector("#add").addEventListener("click", () => { value += 1; count.textContent = value; });
