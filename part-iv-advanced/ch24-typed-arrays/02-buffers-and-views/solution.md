# Solution

```javascript
const buffer = new ArrayBuffer(2);
const bytes = new Uint8Array(buffer);
const view = new DataView(buffer);

view.setUint16(0, 0x1234, true);

console.log("bytes: " + [...bytes].join(", "));
console.log("little-endian: " + view.getUint16(0, true));
console.log("big-endian: " + view.getUint16(0, false));
```

```text
bytes: 52, 18
little-endian: 4660
big-endian: 13330
```

The same two bytes produce different values when the reader uses a different byte order. Network protocols and file formats document which order to use, because computers are perfectly happy to disagree about this if we let them.

---
