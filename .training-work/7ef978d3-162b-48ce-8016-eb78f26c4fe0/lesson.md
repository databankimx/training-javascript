# Homework: safe division

Write a function that returns a quotient, but returns a clear message instead of dividing by zero. The guard belongs inside the function so every caller gets the same protection instead of relying on everyone to remember a separate check.

```javascript
function divide(left, right) {
  if (/* invalid divisor */) {
    return /* helpful message */;
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

---

## Try it Yourself

Complete the guard condition and return message. Try negative values and decimal values as well as zero.

Use **Show example (spoiler)** after you have tested the function.

---

## More background

See [MDN: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).

---
