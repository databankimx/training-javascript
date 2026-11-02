## Solution

```javascript
function divide(left, right) {
  if (right === 0) {
    return "Cannot divide by zero";
  }
  return left / right;
}

console.log(divide(10, 2));
console.log(divide(10, 0));
```

```text
5
Cannot divide by zero
```

The early return handles the invalid divisor before the division expression runs. Keeping the guard in the function means every caller gets the same clear response instead of a surprising `Infinity` result.

---
