# Truthiness - exercise solution

```javascript
const values = [" ", -1, [], [false]];
for (const value of values) {
  console.log(Boolean(value));
}
```

```text
true
true
true
true
```

Whitespace is still text, a negative number is still a number, and both arrays are objects with values or capacity. None of them is one of JavaScript’s falsy values.

---
