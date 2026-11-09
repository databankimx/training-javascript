# Solution

The solution keeps the input small enough to finish quickly and reports the work.

```javascript
let calls = 0;

function fibonacci(n) {
  calls += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(25) = ${fibonacci(25)}`);
console.log(`Calls: ${calls}`);
```

```text
F(25) = 75025
Calls: 242785
```

The repeated calls are the inefficiency we will remove with memoization.

---
