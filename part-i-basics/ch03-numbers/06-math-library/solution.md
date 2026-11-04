# Exercise solution

Here is one way to calculate a distance, clamp a value to a range, and show both exponentiation forms.

```javascript
const start = 14;
const end = 29;
const distance = Math.abs(end - start);
const bounded = Math.min(Math.max(42, 0), 10);
const cube = 3 ** 3;

console.log(distance);
console.log(bounded);
console.log(cube);
console.log(Math.pow(3, 3));
```

```text
15
10
27
27
```

`Math.abs()` turns the difference into a distance. The nested `Math.max()` and `Math.min()` calls clamp 42 to the allowed range from 0 through 10. The final two lines show the newer `**` syntax beside the older, still common `Math.pow()` method. You are likely to see both forms in real code, so recognizing the older one is useful even when you prefer the newer syntax.

---
