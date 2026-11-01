# Floating-point error and rounding strategy

This is the part where JavaScript appears to have forgotten elementary school. The same surprise appears in almost every language that stores decimal-looking values as binary floating-point numbers, so it is worth learning as a computer-number problem rather than blaming JavaScript personally:

```javascript
const total = 0.1 + 0.2;

console.log(total);
console.log(total === 0.3);
console.log(Math.abs(total - 0.3) < Number.EPSILON);

// For money, store whole cents when the domain allows it
const cents = 10 + 20;
console.log(cents);
```

> `Math.abs()` returns the absolute value, so it turns a negative difference into a positive distance. We use it to ask how far the calculated result is from the value we expected.
>
> `Number.EPSILON` is a very small reference value for differences near `1`. It gives us a starting point for a tolerance comparison.

```text
0.30000000000000004
false
true
30
```

Most computers store ordinary `number` values in binary floating-point form. Some decimal fractions cannot be represented exactly in that format, so the stored result is extremely close to `0.3`, but not identical to it. Exact equality is therefore a poor test for many calculated decimal values.

The result is not random, and it is not a rounding error added by `console.log`. The number was already an approximation before we printed it. The console is merely the messenger, which is why yelling at it does not improve the arithmetic.

> Floating-point error is the small difference between a decimal value we write and the nearby binary value the computer can store.
>
> A tolerance is a small acceptable difference. Comparing the size of the difference to a tolerance is more useful than demanding exact equality from an approximation.

Larger calculations may need a tolerance chosen for their scale instead.

For money, one practical strategy is to store whole cents and divide by 100 only when displaying the amount. Another is to use a decimal arithmetic library when the application’s financial rules require it. Rounding every intermediate result is usually a worse strategy because it throws information away repeatedly.

## The multiply, round, and divide pattern

You are likely to encounter an older but very common technique that moves the decimal places into the integer portion, rounds there, and moves them back:

```javascript
const amount = 12.345;
const roundedAmount = Math.round(amount * 100) / 100;
const centsPart = (Math.round(amount * 100) % 100) / 100;

console.log(roundedAmount);
console.log(centsPart);
```

```text
12.35
0.35
```

The first expression produces the complete amount rounded to two decimal places. The second expression uses `% 100` to keep only the cents portion after rounding. That distinction matters: the version with `% 100` is not a replacement for the complete rounded amount. It extracts the remainder.

This pattern is useful to recognize in existing code, but it does not make binary floating-point arithmetic exact. For money, storing whole cents from the beginning or using a decimal arithmetic library is usually easier to reason about.

---

## Try it Yourself

Test `0.1 + 0.2`, `0.2 + 0.2`, and a larger calculation. Compare exact equality with a tolerance. Then use the multiply, round, and divide pattern on a price, and explain the difference between the complete rounded amount and the `% 100` remainder. Finally, model a price in whole cents and explain why that representation avoids this particular surprise.

---

## More background

See [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [MDN: Number.EPSILON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON).

---
