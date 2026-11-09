# BigInt bitwise operations

When a bit mask genuinely needs positions beyond the 32-bit Number boundary, JavaScript provides BigInt. BigInt literals use an n suffix, and both operands in a bitwise operation must be BigInts.

```javascript
const LOW = 1n;
const HIGH = 1n << 40n;
const flags = LOW | HIGH;

console.log("high flag: " + Boolean(flags & HIGH));
console.log("combined: " + flags);
```

```text
high flag: true
combined: 1099511627777
```

The shift creates a flag at position 40. OR combines it with the low flag, and AND tests it. Notice that the code uses 1n, not 1. JavaScript will not silently mix Number and BigInt values.

> BigInt is for integer arithmetic that needs more range than Number safely provides. It is not a general replacement for Number, and it cannot be mixed with Number without an explicit conversion.

## Try it Yourself

Add a second high flag, combine it with LOW, and test both high flags. Then deliberately mix 1 and 1n to see the error. Repair it by choosing one numeric type consistently.

---
