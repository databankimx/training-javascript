const button = document.querySelector("#add");
const count = document.querySelector("#count");
let value = 0;

button.addEventListener("click", () => {
  value += 1;
  count.textContent = value;
});
