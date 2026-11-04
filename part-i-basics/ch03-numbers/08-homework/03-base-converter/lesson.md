# Homework: base converter

Build a small base-conversion report for the value `42`. Print the value normally, then as binary, octal, and hexadecimal text. Finally, parse the binary text back into a decimal number.

```javascript
const value = 42;
console.log(value);
console.log(/* binary text */);
console.log(/* octal text */);
console.log(/* hexadecimal text */);
console.log(/* parse binary text */);
```

```text
42
101010
52
2a
42
```

---

## Try it Yourself

Change the value and verify each representation by hand or with a small table. Parse a hexadecimal string back to decimal, making sure you pass the correct radix. Explain why the values are numbers until `toString()` creates display text.

---

## More background

See [MDN: Number.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) and [MDN: Number.parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

---
