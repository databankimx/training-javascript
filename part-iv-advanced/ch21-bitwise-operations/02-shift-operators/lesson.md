# Shift operators

Once we can see bit positions, shifts become less mysterious. A shift moves the bits left or right. For small positive values, a left shift resembles multiplication by two, and a right shift resembles division by two.

```javascript
const value = 2;

console.log("left once: " + (value << 1));
console.log("left twice: " + (value << 2));
console.log("right once: " + (16 >> 1));
console.log("right twice: " + (16 >> 2));
```

```text
left once: 4
left twice: 8
right once: 8
right twice: 4
```

`2` is `0010` in binary. Moving its `1` left once gives `0100`, or `4`. Moving it twice gives `1000`, or `8`. Moving `16` right twice has the opposite effect, reducing it to `4`.

| Operator | Meaning | Example |
| --- | --- | --- |
| `<<` | Shift bits left | `2 << 2` is `8` |
| `>>` | Shift signed bits right | `16 >> 2` is `4` |
| `>>>` | Shift right and fill with zeroes | Useful when treating a value as unsigned |

---

## Overflow is lost data

The multiplication analogy has a boundary. JavaScript converts Number operands to signed 32-bit integers for bitwise operations. That gives us only 32 positions. If a `1` shifts beyond the available positions, it falls off the left side and is lost.

```javascript
const highestPositiveBit = 1 << 30;

console.log("sign bit: " + (highestPositiveBit << 1));
console.log("past sign bit: " + (highestPositiveBit << 2));
```

```text
sign bit: -2147483648
past sign bit: 0
```

The highest positive bit is position 30. Position 31 is reserved as the sign bit in a signed 32-bit value. Moving the position-30 bit left once turns the result negative because the sign bit is now set. Moving it two places left discards the bit entirely, leaving zero.

> Overflow occurs when a shift moves a bit beyond the available width on the left. The bit is not saved somewhere else. It is discarded, so the result can lose information.

This is different from ordinary JavaScript arithmetic. `2 ** 31` is still an ordinary Number. It is the bitwise conversion that imposes the 32-bit boundary.

---

## Underflow is also lost data

Right shifts can lose information when a `1` moves past the ones position on the right.

```javascript
console.log("underflow: " + (4 >> 3));
```

```text
underflow: 0
```

`4` is `100` in binary. Shifting right three places would move the `1` beyond the last position. There is no fractional bit in an integer bitwise result, so the bit disappears and the result is zero.

> Underflow occurs when a right shift discards bits that fall off the right-hand side. It is not a floating-point underflow. It is simply information lost during an integer shift.

---

## The sign bit and unsigned inspection

The ordinary right-shift operator, `>>`, preserves the sign. The unsigned right-shift operator, `>>>`, fills from the left with zeroes and lets us inspect a value as an unsigned 32-bit pattern.

```javascript
console.log("unsigned sign bit: " + ((-1 >>> 0) >>> 31));
```

```text
unsigned sign bit: 1
```

`-1` has all 32 bits set in signed two's-complement representation. `>>> 0` displays those same bits as the unsigned value `4294967295`, and shifting that value right 31 places moves the sign-bit position into the ones place.

The three cases from the complete script are worth comparing:

```text
sign bit: -2147483648
past sign bit: 0
underflow: 0
unsigned sign bit: 1
```

Do not treat a shift as an unlimited conveyor belt. The width, the sign convention, and the choice between `>>` and `>>>` all matter.

## Try it Yourself

Change the script and predict the output before running it:

- Shift `1 << 30` left by one and by two positions.
- Shift `8` right by one, two, three, and four positions.
- Compare `-1 >> 31` with `-1 >>> 31`.
- Print the ordinary arithmetic result beside the bitwise result for `2 ** 31`.

Explain which values are ordinary Number results and which values have passed through the signed 32-bit bitwise conversion.

---
