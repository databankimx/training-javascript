# Exercise solution

Here is one way to compare the calculated value with a tolerance and keep the money example in whole cents.

```javascript
const total = 0.1 + 0.2;
const closeEnough = Math.abs(total - 0.3) < Number.EPSILON;
const cents = 1999 + 250;

console.log(total);
console.log(closeEnough);
console.log(cents);
console.log((cents / 100).toFixed(2));
```

```text
0.30000000000000004
true
2249
22.49
```

The decimal calculation is approximate, so the comparison uses a tolerance. `Math.abs()` turns the difference into a positive distance before we compare it with `Number.EPSILON`. The money example stores whole cents during arithmetic and converts to a two-decimal display only at the end.

---
