# Solution

```javascript
const buffer = new ArrayBuffer(4);
const bytes = new Uint8Array(buffer);
const view = new DataView(buffer);

view.setUint8(0, 7);
view.setUint16(1, 300, true);

console.log("bytes: " + [...bytes].join(", "));
console.log("version: " + view.getUint8(0));
console.log("count: " + view.getUint16(1, true));
```

```text
bytes: 7, 44, 1, 0
version: 7
count: 300
```

The packet uses one byte for the version and two bytes for the count. The fourth byte remains `0`, because the buffer is four bytes long and we did not assign it. The `true` argument tells `DataView` to use little-endian order for the two-byte count.

---
