const status = document.querySelector("#status");

document.querySelectorAll(".product").forEach(button => {
  button.addEventListener("click", () => {
    status.textContent = `Product ${button.dataset.productId}: $${button.dataset.price}`;
  });
});
