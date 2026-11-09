# Bit-shift - Real-world example: reconstructing integers

Bit-shifting becomes useful when a data stream gives us the pieces of a value instead of the value itself. This happens when a file format, device, or network protocol stores an integer as several bytes.

## Scenario

Suppose a data stream gives us a flat array of bytes. The documentation says that every group of four bytes represents one unsigned 32-bit integer, with the least significant byte first.

That byte order is called **little-endian**. The first byte belongs to bits 0 through 7, the second belongs to bits 8 through 15, and so on.

For example, these four bytes represent `1,234,567,890`:

```text
1101 0010  0000 0010  1001 0110  0100 1001
```

The first byte is `0xD2`. The next is `0x02`, but it does not contribute the value `2`. It contributes `2` shifted left by eight positions, or `512`. Each later byte is shifted by another eight positions.

## One integer, one group of bytes

The direct arithmetic version makes the idea visible:

```javascript
const bytes = [0b1101_0010, 0b0000_0010, 0b1001_0110, 0b0100_1001];

const value = bytes[0]
  + bytes[1] * 2 ** 8
  + bytes[2] * 2 ** 16
  + bytes[3] * 2 ** 24;

console.log(value);
```

Expected output:

```text
1234567890
```

The powers of two are predictable, but writing them out becomes tiresome when the format changes. A shift expresses the same relationship directly: byte `i` moves left by `i * 8` bits.

## Reconstructing with shifts

```javascript
function reconstructInteger(data, size = 4) {
  if (data.length !== size) {
    throw new Error("Invalid data length");
  }

  let value = 0;

  for (let i = 0; i < data.length; i += 1) {
    const shiftedByte = (data[i] << (i * 8)) >>> 0;
    value += shiftedByte;
  }

  return value >>> 0;
}
```

`data[i]` gives us one byte. The shift count is `i * 8`: zero for the first byte, eight for the second, 16 for the third, and 24 for the fourth. The unsigned right shift by zero, `>>> 0`, converts the result back to an unsigned 32-bit value after JavaScript's bitwise operators have done their work in signed 32-bit space.

## Reconstructing a stream

The stream can contain several integers back to back. We validate that its length divides evenly by the group size, take one group at a time, and pass each group to `reconstructInteger`:

```javascript
function reconstructIntegers(byteArray, size = 4) {
  if (byteArray.length % size !== 0) {
    throw new Error("Invalid data length");
  }

  const integers = [];

  for (let start = 0; start < byteArray.length; start += size) {
    const data = byteArray.slice(start, start + size);
    integers.push(reconstructInteger(data, size));
  }

  return integers;
}
```

The outer function handles the stream. The inner function handles one integer. Keeping those jobs separate makes both functions easier to test and reuse.

## The complete example

```javascript
function reconstructInteger(data, size = 4) {
  if (data.length !== size) {
    throw new Error("Invalid data length");
  }

  let value = 0;

  for (let i = 0; i < data.length; i += 1) {
    value += (data[i] << (i * 8)) >>> 0;
  }

  return value >>> 0;
}

function reconstructIntegers(byteArray, size = 4) {
  if (byteArray.length % size !== 0) {
    throw new Error("Invalid data length");
  }

  const integers = [];

  for (let start = 0; start < byteArray.length; start += size) {
    const data = byteArray.slice(start, start + size);
    integers.push(reconstructInteger(data, size));
  }

  return integers;
}

const byteArray = [
  0b0000_0000, 0b0000_0000, 0b0000_0000, 0b0000_0000,
  0b1101_0010, 0b0000_0010, 0b1001_0110, 0b0100_1001,
  0b0001_0101, 0b1100_1101, 0b0101_1011, 0b0000_0111,
  0b1111_1111, 0b1111_1111, 0b1111_1111, 0b1111_1111
];

for (const value of reconstructIntegers(byteArray)) {
  console.log(value.toLocaleString("en-US").padStart(13, " "));
}
```

Expected output:

```text
            0
1,234,567,890
  123,456,789
4,294,967,295
```

The final value uses every bit in an unsigned 32-bit integer. JavaScript's ordinary `Number` type can represent it exactly, but bitwise operators still convert their operands to signed 32-bit integers. That is why the unsigned conversion is part of the example rather than decorative punctuation.

---

## Try it Yourself

Change the byte stream so it contains another known value. Try a group with the bytes in the opposite order and explain why the result changes. Then pass a byte array whose length is not divisible by four and observe the validation error.

---

## Further reading

Review the earlier lesson on shift operators and the discussion of JavaScript's 32-bit bitwise boundary. Little-endian and big-endian byte order are worth recognizing whenever code reads binary files or talks to a device.

---
