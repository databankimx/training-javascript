## Solution

```javascript
function safeNumber(text) {
  const value = Number(text);
  if (Number.isNaN(value)) {
    return "Not a number";
  }
  return value;
}

console.log(safeNumber("42"));
console.log(safeNumber("oops"));
```

```text
42
Not a number
```

`Number.isNaN` identifies the failed conversion without confusing the original text with the special `NaN` value. The helper turns that technical failure into a result the caller can explain.

---
