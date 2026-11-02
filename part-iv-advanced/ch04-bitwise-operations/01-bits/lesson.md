# Bits, binary, and bit positions

A bit is a binary digit, either `0` or `1`. Binary numbers use those two digits, with each position representing a power of two. `1011` means `8 + 2 + 1`, or `11` in decimal.

```javascript
const value = 11;

console.log(value.toString(2));
console.log((1 << 0).toString(2).padStart(4, "0"));
console.log((1 << 1).toString(2).padStart(4, "0"));
console.log((1 << 2).toString(2).padStart(4, "0"));
```

```text
1011
0001
0010
0100
```

`toString(2)` displays a number in base 2. The shift operator, `<<`, moves the binary `1` to a different position. Shifting left one place doubles the value, which gives us convenient positions for flags.

| Binary position | Decimal value |
| ---: | ---: |
| `0001` | `1` |
| `0010` | `2` |
| `0100` | `4` |
| `1000` | `8` |

> A bit mask is a number whose bits represent independent on-or-off settings. We will use named masks instead of scattering mysterious numbers through our code.

## Try it Yourself

Change `value` to `13`, print its binary representation, and explain which positions are on. Add a shift for the value `8`.

---
