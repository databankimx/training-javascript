# Integer overflow

There is a general problem when working with a fixed number of bits.

What happens when we exceed the maximum value? In other words, what happens when an arithmetic operation needs more bits than the representation has available?

That situation is called **overflow**, and it can produce results that look surprising until we remember that the storage location has a hard limit. The computer does not get to borrow an extra bit just because the answer would be more convenient.

> JavaScript `Number` values normally use floating-point arithmetic, so ordinary expressions such as `255 + 1` do not overflow as an 8-bit integer would. The examples in this lesson deliberately simulate fixed-width storage so we can see what happens in a byte or a 32-bit bitwise operation.

---

## Overflowing an unsigned integer

An unsigned eight-bit value has eight available positions. Its largest value is:

| Binary | Decimal |
| :-: | :-: |
| `1111 1111` | `255` |

If we add one, the mathematical result is `256`, which requires a ninth bit:

| Binary calculation | Decimal calculation |
| :-: | :-: |
| `1111 1111` | `255` |
| `+ 0000 0001` | `+ 1` |
| `1 0000 0000` | `256` |

The extra carry is real, but an eight-bit storage location has nowhere to keep it. If we retain only the low eight bits, the stored result is `0000 0000`.

The mask `0xff` keeps the low eight bits. In a real fixed-width byte, that discard would be part of the storage operation rather than an explicit mask in our code.

---

## Overflowing a signed integer

Signed values use one bit as the sign bit. In an eight-bit signed representation, the largest positive value is `0111 1111`, or `127`.

| Binary | Decimal |
| :-: | :-: |
| `0111 1111` | `127` |
| `+ 0000 0001` | `+ 1` |
| `1000 0000` | `128` mathematically |

The addition has not lost a bit outside the eight positions. Instead, the carry has changed the leftmost bit, which is the sign bit. Under two's-complement interpretation, `1000 0000` means `-128`, not `128`.

So, within this simulated eight-bit type:

```text
127 + 1 = -128
```

That is not a mistake in the addition circuit. It is the consequence of interpreting the resulting bit pattern as a signed value.

---

## Why the extra value is negative

An eight-bit pattern has `2^8`, or `256`, possible arrangements. When one bit is reserved for the sign, the range cannot be perfectly balanced around zero. Two's complement uses the extra pattern for the negative side:

| Representation | Range |
| :-: | :-: |
| Unsigned 8-bit | `0` through `255` |
| Signed 8-bit | `-128` through `127` |

There are two practical reasons for this choice:

* There is only one representation of zero.
* Addition can use the same bit-by-bit circuitry for positive and negative values.

The next lessons explain one's complement and two's complement in detail. For now, the important point is that a sign bit changes how the same stored pattern is interpreted.

---

## JavaScript's 32-bit bitwise boundary

JavaScript's `Number` type is not an eight-bit or thirty-two-bit integer type. However, the bitwise operators convert their operands to signed 32-bit integers before operating on them. That creates a similar boundary:

The value exists perfectly well as an ordinary `Number`. It becomes `0` only because the bitwise operator keeps the low 32 bits, all of which are zero in this case.

> This is why JavaScript bitwise code deserves a little suspicion. The value may be a perfectly ordinary `Number` until one bitwise operator silently moves it into a signed 32-bit world.

---

## Try it Yourself

1. Change the unsigned example to simulate a three-bit value. What happens to `111 + 1`?
2. Change the signed example to start at `-1`, then inspect its eight stored bits.
3. Try `2 ** 31`, `2 ** 31 | 0`, and `2 ** 32 | 0`. Explain why the ordinary values and bitwise values differ.

Do not merely report the output. Explain which bits were retained and which interpretation changed.

---

Overflow is not random, but it is easy to miss when the language normally gives us a much larger numeric range. The cure is to know the width of the representation involved before trusting the result.

---
