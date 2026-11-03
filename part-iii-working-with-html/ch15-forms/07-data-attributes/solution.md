## Solution

```javascript
const status = document.querySelector("#status");
const quantity = document.querySelector("#quantity");

document.querySelectorAll(".product").forEach(button => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.price);
    const total = price * Number(quantity.value);
    status.textContent = `Product ${button.dataset.productId}: $${total.toFixed(2)}`;
  });
});
```

The metadata remains attached to the button, while the quantity comes from a form control. Converting both values before multiplication keeps string concatenation from sneaking into the calculation wearing a fake moustache.

```text
Product A12: $39.98
```

---
