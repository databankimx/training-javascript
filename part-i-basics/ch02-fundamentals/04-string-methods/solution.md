# String methods and formatting - exercise solution

Here is one reasonable way through this exercise:

```javascript
const customer = "Ada";
const quantity = 3;
const total = 8.25;
const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

console.log(`${customer}: ${String(quantity).padStart(2, "0")} items, ${formatter.format(total)}`);
```

```text
Ada: 03 items, $8.25
```

The quantity stays numeric for calculations, then `String(quantity)` makes a string copy for padding. Currency formatting happens at the display boundary, so the stored total remains useful as a number.

---
