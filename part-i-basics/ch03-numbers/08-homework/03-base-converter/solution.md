# Exercise solution

Here is one way to produce each display representation and then read the binary text back with its explicit radix.

```javascript
const value = 42;

console.log(value);
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));
console.log(Number.parseInt("101010", 2));
```

```text
42
101010
52
2a
42
```

`toString()` creates each requested representation of the same number. The explicit radix tells `Number.parseInt()` how to read the binary text back into the decimal value 42. Without that radix, the parser would assume decimal, which would make the round trip tell a rather different story.

---
