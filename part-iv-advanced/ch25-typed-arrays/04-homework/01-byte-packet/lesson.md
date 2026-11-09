# Homework: inspect a byte packet

Binary packets often begin with a small version field followed by one or more values. Your job is to inspect this packet without pretending that the bytes are ordinary JavaScript numbers.

The spoiler contains a complete solution, because a homework answer that stops halfway is not much of an answer. Try the work first, then reveal it when you are ready to compare approaches.

```javascript
const buffer = new ArrayBuffer(4);
const bytes = new Uint8Array(buffer);
const view = new DataView(buffer);

// Store and read the packet fields here.
```

```text
bytes: 7, 44, 1, 0
version: 7
count: 300
```

## Try it Yourself

Create a four-byte `ArrayBuffer`. Store version `7` in the first byte and count `300` in the next two bytes using little-endian order. Print the bytes, then read and print the version and count with `DataView`. The unused fourth byte should remain `0`.

---
