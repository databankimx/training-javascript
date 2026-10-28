# Binary, octal, and hexadecimal - exercise solution

```javascript
const value = 0x33;

console.log(value);
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));
```

```text
51
110011
63
33
```

The literal is hexadecimal, but the stored value is the ordinary number 51. Each `toString()` call creates a different text representation of that same value.

---
