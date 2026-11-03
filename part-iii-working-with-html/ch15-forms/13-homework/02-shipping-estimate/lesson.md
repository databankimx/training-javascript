# Homework: shipping estimate

Build a shipping estimate from the package weight and selected shipping speed. The option values contain the base shipping prices.

```javascript
const weight = Number(document.querySelector("#weight").value);
const basePrice = Number(document.querySelector("#speed").value);
```

```text
Ground, 2 kg: $9.00
```

---

## Try it Yourself

Charge the base price plus `$2.00` per unit of weight. Reject blank, negative, or non-numeric weight with the `invalid` class and focus the weight input. Format the result as currency. Changing the select option should change the estimate.

Use **Show example (spoiler)** only after testing all three shipping speeds.

---
