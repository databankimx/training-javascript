# Binary, octal, and hexadecimal

Decimal is the usual human default, but computers and technical data often use other bases. JavaScript lets us write a literal with a prefix and convert a number to another base when we display it.

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

| Method or syntax | Purpose | Output here |
| --- | --- | --- |
| `0b1010` | Write a binary numeric literal | `10` in decimal |
| `0o377` | Write an octal numeric literal | `255` in decimal |
| `0xff` | Write a hexadecimal numeric literal | `255` in decimal |
| `toString(2)` | Display a number in binary | `"1010"` |
| `toString(8)` | Display a number in octal | `"377"` |
| `toString(16)` | Display a number in hexadecimal | `"ff"` |

The prefixes `0b`, `0o`, and `0x` tell JavaScript how to read a literal. The value is still a number, so printing it normally uses decimal. `toString(base)` chooses the base for a text representation.

> A base is the number of symbols available for each digit. Decimal uses ten symbols, binary uses two, octal uses eight, and hexadecimal uses sixteen.
>
> Hexadecimal uses `a` through `f` for values ten through fifteen. Letter case is a display choice, not a different number.

---

## Try it Yourself

Write the same value as a binary, octal, and hexadecimal literal. Print each value in decimal, then convert it back to the base you started with. Try a hexadecimal color component such as `0x33` and explain why its normal output is decimal.

---

## More background

See [MDN: Numeric literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) and [MDN: Number.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

---
