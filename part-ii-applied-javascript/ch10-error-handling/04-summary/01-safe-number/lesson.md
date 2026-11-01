# Homework: safe number conversion

Write a function that converts text with `Number()`. Return the number for valid input and `Not a number` when conversion produces `NaN`.

```javascript
function safeNumber(text) {
  const value = Number(text);
  if (/* invalid */) {
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

---

## Try it Yourself

Test an empty string, a decimal, and a string containing spaces. Decide which values your application should accept.

Use **Show example (spoiler)** after you have tested your function.

---

## More background

See [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).

---
