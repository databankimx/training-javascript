# Exercise solution

Here is one reasonable way to keep the invoice arithmetic in whole cents and round the tax once.

```javascript
const subtotalCents = 2499;
const taxRate = 0.084;
const taxCents = Math.round(subtotalCents * taxRate);
const totalCents = subtotalCents + taxCents;

console.log(`Tax: $${(taxCents / 100).toFixed(2)}`);
console.log(`Total: $${(totalCents / 100).toFixed(2)}`);
```

```text
Tax: $2.10
Total: $27.09
```

The calculation keeps money in whole cents, rounds tax once to the nearest cent, and adds integer values. Division by 100 and `toFixed(2)` are reserved for display. This makes the unit of the calculation explicit, which is much easier to reason about than asking a decimal floating-point value to behave like an accounting ledger.

---
