# The 32-bit boundary

Bitwise operators on ordinary Number values convert their operands to signed 32-bit integers before doing the operation. That is convenient for small masks, but it is not arbitrary-size integer arithmetic.

```javascript
const value = 2 ** 32;

console.log("ordinary: " + value);
console.log("bitwise: " + (value | 0));
```

```text
ordinary: 4294967296
bitwise: 0
```

The ordinary Number can represent 2 ** 32. The bitwise OR forces the value through the signed 32-bit conversion, where the low 32 bits are all zero. The result is therefore 0.

> Keep bitwise masks small and intentional. Do not use them for money, large identifiers, or calculations that need ordinary Number behavior.

## Try it Yourself

Try 2 ** 31, 2 ** 31 - 1, and 2 ** 32 - 1. Print the ordinary value and the result of value | 0 for each.

---

