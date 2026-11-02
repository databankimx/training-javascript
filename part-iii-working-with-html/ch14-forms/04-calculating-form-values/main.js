const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");
const total = document.querySelector("#total");

document.querySelector("#calculate").addEventListener("click", () => {
  const subtotal = Number(quantity.value) * Number(price.value);
  total.textContent = `Total: $${subtotal.toFixed(2)}`;
});
