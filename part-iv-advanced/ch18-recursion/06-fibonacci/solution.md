# Solution

The solution adds a small input guard and prints the next values in the sequence.

```javascript
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Use a non-negative integer.");
  }
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (const n of [6, 7, 8]) {
  console.log(`F(${n}) = ${fibonacci(n)}`);
}
```

```text
F(6) = 8
F(7) = 13
F(8) = 21
```

The guard makes the function's accepted input explicit. It does not solve the repeated-work problem. That is the subject of the complexity chapter.

---
