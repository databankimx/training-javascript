# Buffers, offsets, and byte order

Typed arrays make fixed-width numbers convenient, but sometimes we need to see the storage underneath. That is where `ArrayBuffer` and `DataView` enter the story. The names sound like they were chosen by a committee that had already used all the good names, but the jobs are useful.

An `ArrayBuffer` reserves raw bytes. It does not know whether those bytes represent integers, decimals, text, or anything else. A typed array or a `DataView` gives those bytes a point of view.

> `ArrayBuffer` is the storage. A typed array is a convenient view with one fixed element type. `DataView` is the flexible view: each read or write can choose its type, offset, and byte order.

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

The number `0x1234` is 4660 in decimal. We write it into two bytes in little-endian order, so the lower byte comes first: `0x34` is 52 and `0x12` is 18. Reading those same bytes in big-endian order produces a different number. The bytes did not change. Our interpretation did.

The offset is the byte position where an operation starts. Here the value begins at offset `0` and occupies two bytes. If the buffer held several values, the next operation could begin at offset `2`, provided the buffer was large enough. An offset is a count of bytes, not a count of typed-array elements.

| API | What it provides |
| --- | --- |
| `ArrayBuffer` | A fixed block of raw bytes |
| `Uint8Array` | One unsigned byte per element |
| `DataView` | Explicit reads and writes with offsets and byte order |

> Byte order, also called endianness, is the order used to store the bytes of a multi-byte value. Little-endian puts the least significant byte first. Big-endian puts the most significant byte first.

## Try it Yourself

Change the value written by `setUint16()`. Try `false` and `true` for the third argument, then compare the bytes and both readings. Add a second value at byte offset `0` only after deciding whether the buffer is large enough.

---
