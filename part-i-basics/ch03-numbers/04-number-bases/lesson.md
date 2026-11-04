# Binary, octal, and hexadecimal

Decimal is the usual human default, but it is only one way to write a number. Computers and technical data often use other bases. Binary appears in bit flags, octal survives in permissions and older conventions, and hexadecimal is common in colors, memory addresses, and protocol values. JavaScript lets us write a literal with a prefix and convert a number to another base when we display it.

## What does “base” mean?

A base tells us how many symbols are available for each digit and how the place values grow as we move left. In decimal, or base 10, we use the digits `0` through `9`. The places represent powers of ten:

| Hundreds | Tens | Ones |
| ---: | ---: | ---: |
| 3 | 4 | 2 |

The value `342` means:

```text
3 × 10² + 4 × 10¹ + 2 × 10⁰
= 300 + 40 + 2
= 342
```

Other bases use the same positional idea with a different number of symbols:

| Base | Name | Digits used | Where it appears |
| ---: | --- | --- | --- |
| 2 | Binary | `0`, `1` | Bits, flags, hardware-oriented data |
| 8 | Octal | `0` through `7` | File permissions and older systems |
| 10 | Decimal | `0` through `9` | Everyday human numbers |
| 16 | Hexadecimal | `0` through `9`, then `a` through `f` | Colors, addresses, compact technical values |

Hexadecimal needs six extra symbols after `9`, so `a` means ten, `b` means eleven, and `f` means fifteen. Letter case is only a display choice. `0xff` and `0xFF` represent the same number.

```javascript
const binary = 0b1010;
const octal = 0o377;
const hexadecimal = 0xff;

console.log(binary);
console.log(octal);
console.log(hexadecimal);
console.log(binary.toString(2));
console.log(octal.toString(8));
console.log(hexadecimal.toString(16));
```

```text
10
255
255
1010
377
ff
```

Here is a brief explanation of the prefixes and conversion method:

| Method or syntax | Purpose | Output here |
| --- | --- | --- |
| `0b1010` | Write a binary numeric literal | `10` in decimal |
| `0o377` | Write an octal numeric literal | `255` in decimal |
| `0xff` | Write a hexadecimal numeric literal | `255` in decimal |
| `toString(2)` | Display a number in binary | `"1010"` |
| `toString(8)` | Display a number in octal | `"377"` |
| `toString(16)` | Display a number in hexadecimal | `"ff"` |

The prefixes `0b`, `0o`, and `0x` tell JavaScript how to read a literal. The value is still a number, so printing it normally uses decimal. `toString(base)` chooses the base for a text representation.

Let us unpack one binary value. `0b1010` contains four binary digits. Reading from right to left, their place values are `1`, `2`, `4`, and `8`:

```text
1 × 8 + 0 × 4 + 1 × 2 + 0 × 1
= 8 + 0 + 2 + 0
= 10
```

That is why JavaScript prints `0b1010` as the decimal number `10`. The prefix changes how JavaScript reads the source literal, not the kind of value stored after the literal has been evaluated.

Hexadecimal is useful because one hex digit represents four binary bits. For example, `0xff` is sixteen times fifteen plus fifteen:

```text
15 × 16 + 15 × 1
= 240 + 15
= 255
```

That compact notation is why colors such as `#336699` and values in debugging tools often use hexadecimal. The number is still an ordinary JavaScript number. We are choosing a shorter or more useful way to write it.

> A base is the number of symbols available for each digit. Decimal uses ten symbols, binary uses two, octal uses eight, and hexadecimal uses sixteen.
>
> Hexadecimal uses `a` through `f` for values ten through fifteen. Letter case is a display choice, not a different number.

The same value can therefore have several written forms. `255`, `0b11111111`, `0o377`, and `0xff` look different, but they all represent the same stored number.

---

## Try it Yourself

Write the same value as a binary, octal, and hexadecimal literal. Before you run the program, expand one of the values by hand using its place values. Print each value in decimal, then convert it back to the base you started with. Try a hexadecimal color component such as `0x33` and explain why its normal output is decimal. Finally, choose a value such as `255` and show four different spellings for the same number.

---

## More background

See [MDN: Numeric literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) and [MDN: Number.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

---
