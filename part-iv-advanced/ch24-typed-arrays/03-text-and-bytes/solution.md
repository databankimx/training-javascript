# Solution

```javascript
const message = "café";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const bytes = encoder.encode(message);

console.log("bytes: " + [...bytes].join(", "));
console.log("byte count: " + bytes.length);
console.log("decoded: " + decoder.decode(bytes));
```

```text
bytes: 99, 97, 102, 195, 169
byte count: 5
decoded: café
```

The encoded form uses five bytes because `é` takes two bytes in UTF-8. Decoding with the same encoding restores the original text.

---
