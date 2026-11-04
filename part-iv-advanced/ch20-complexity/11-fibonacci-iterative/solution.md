# Solution

The array-based version keeps every term through `F(n)`.

```javascript
function fibonacci(n) {
  const values = [0, 1];

  for (let index = 2; index <= n; index += 1) {
    values.push(values[index - 1] + values[index - 2]);
  }

  return values[n];
}

console.log(fibonacci(40));
```

```text
102334155
```

This remains `O(n)` time, but its array uses `O(n)` space. The two-variable version is preferable when earlier terms are not needed later.

---
