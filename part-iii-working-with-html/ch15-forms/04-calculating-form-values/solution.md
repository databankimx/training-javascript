## Solution

```javascript
const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");
const total = document.querySelector("#total");

document.querySelector("#calculate").addEventListener("click", () => {
  const count = Number(quantity.value);
  const amount = Number(price.value);
  if (!Number.isFinite(count) || !Number.isFinite(amount) || count < 0 || amount < 0) {
    total.textContent = "Enter non-negative numbers before calculating.";
    return;
  }

  total.textContent = `Total: $${(count * amount).toFixed(2)}`;
});
```

The solution validates the converted values before multiplying them. That matters because an empty or malformed control value should produce a useful message, not a total that quietly turns into `NaN`.

```text
Valid input: Total: $39.98
Invalid input: Enter non-negative numbers before calculating.
```

---
