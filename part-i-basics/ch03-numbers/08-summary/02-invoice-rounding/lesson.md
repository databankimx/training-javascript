# Homework: invoice rounding

Write an invoice calculation that starts with a subtotal in whole cents and a tax rate of `0.084`. Calculate tax cents with an intentional rounding strategy, add the tax to the subtotal, and display both amounts as dollars with two decimal places.

```javascript
const subtotalCents = 2499;
const taxRate = 0.084;
const taxCents = /* calculate and round tax */;
const totalCents = /* add the cents */;

console.log(/* display tax */);
console.log(/* display total */);
```

```text
Tax: $2.10
Total: $27.09
```

---

## Try it Yourself

Change the subtotal and rate. Compare a cents-based calculation with one that stores dollars as a decimal. Explain where rounding occurs and why repeatedly rounding intermediate values could change a final total.

Reveal the example only after you have decided what the smallest unit of the calculation should be.

---

## More background

See [MDN: Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) and [MDN: Number.prototype.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
