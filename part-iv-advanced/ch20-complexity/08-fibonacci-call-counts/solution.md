# Solution

The counter must be reset before each independent run.

```javascript
let calls = 0;

function fibonacci(n) {
  calls += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(6) = ${fibonacci(6)}`);
console.log(`Calls: ${calls}`);
```

```text
F(6) = 8
Calls: 25
```

The call count grows much faster than the answer. That gap is the clue that the function is repeating work.

---
