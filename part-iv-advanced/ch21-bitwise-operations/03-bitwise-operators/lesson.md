# AND, OR, XOR, and NOT

Bitwise operators apply logic to matching bit positions. The idea is similar to Boolean logic, except that a whole number can carry several positions at once.

```javascript
const left = 0b1010;
const right = 0b0101;

console.log("AND: " + (left & right));
console.log("OR: " + (left | right));
console.log("XOR: " + (left ^ right));
console.log("NOT 0: " + (~0));
```

| Operator | Result for each pair of bits | Typical use |
| --- | --- | --- |
| `&` | 1 only when both bits are 1 | Test or keep selected bits |
| `\|` | 1 when either bit is 1 | Combine or grant flags |
| `^` | 1 when the bits differ | Toggle flags |
| `~` | Flips every bit | Build a clearing mask |

For `1010 & 0101`, no position contains two 1 bits, so the result is `0000`. OR produces `1111`. XOR also produces `1111` because every pair differs. NOT is less visually friendly: `~0` is -1 because Number bitwise operations use signed 32-bit representation.

```text
AND: 0
OR: 15
XOR: 15
NOT 0: -1
```

> XOR is often called exclusive OR. It is true for exactly one of two inputs, not for both. With flags, XOR is useful when “toggle this setting” is the operation we actually mean.

## Try it Yourself

Change the two binary values so they share one bit but differ in the others. Predict all four results before running the script.

---

