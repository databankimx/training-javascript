## Solution

```javascript
const fields = [nameInput, quantityInput, priceInput, emailInput];
fields.forEach(field => field.classList.remove("invalid"));

const quantity = Number(quantityInput.value);
const price = Number(priceInput.value);
const invalid = [];
if (!nameInput.value.trim()) invalid.push(nameInput);
if (!Number.isInteger(quantity) || quantity < 1) invalid.push(quantityInput);
if (!Number.isFinite(price) || price < 0) invalid.push(priceInput);
if (!emailInput.value.trim().includes("@")) invalid.push(emailInput);

invalid.forEach(field => field.classList.add("invalid"));
if (invalid.length > 0) {
  message.textContent = "Please correct the highlighted fields.";
  invalid[0].focus();
  return;
}

message.textContent = `Thanks, ${nameInput.value.trim()}. Total: $${(quantity * price).toFixed(2)}.`;
```

The email rule follows the same pattern as the other rules. It is deliberately modest rather than pretending that one `includes("@")` check is a complete definition of a valid email address.

```text
Valid input: Thanks, Ada. Total: $39.98.
Invalid input: Please correct the highlighted fields.
```

---
