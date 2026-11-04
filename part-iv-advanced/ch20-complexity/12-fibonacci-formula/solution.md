# Solution

The solution compares the formula with an iterative integer calculation.

```javascript
function fibonacciIterative(n) {
  let previous = 0;
  let current = 1;

  for (let index = 0; index < n; index += 1) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}

console.log(fibonacciIterative(40));
```

```text
102334155
```

For larger values, use the integer calculation as the reference. The formula is quick, but its floating-point approximation eventually becomes the more important limitation.

---
