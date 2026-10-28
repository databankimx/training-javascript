# Homework: base converter - exercise solution

```javascript
const value = 42;

console.log(value);
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));
console.log(parseInt("101010", 2));
```

```text
42
101010
52
2a
42
```

`toString()` creates each requested representation of the same number. The explicit radix tells `parseInt()` how to read the binary text back into the decimal value 42.

---
