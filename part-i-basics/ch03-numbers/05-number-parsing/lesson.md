# Parsing numeric text

We have already met `Number()`, `parseInt()`, and `parseFloat()`. Here is the practical comparison in one place, because existing code is unlikely to organize itself for our convenience.

```javascript
const text = "12.5px";

console.log(Number(text));
console.log(parseInt(text, 10));
console.log(parseFloat(text));
console.log(Number("12.5"));
```

```text
NaN
12
12.5
12.5
```

| Method | Purpose | Output for `"12.5px"` |
| --- | --- | --- |
| `Number()` | Convert the entire value | `NaN` |
| `parseInt(text, 10)` | Read an integer prefix in base 10 | `12` |
| `parseFloat()` | Read a decimal prefix | `12.5` |

The last line in the example uses `Number("12.5")`, which succeeds because the whole value is numeric.

`Number()` converts the whole value. Extra characters make the conversion fail. `parseInt()` reads an integer from the beginning and stops when the text no longer fits. `parseFloat()` does the same for a decimal value. For general type conversion, developers usually prefer the stricter `Number()`; the parse functions are still useful when the requirement really is to read a numeric prefix.

> A radix is the base used by an integer parser. The `10` in `parseInt(text, 10)` says to read decimal digits.
>
> `parseInt()` and `parseFloat()` are older, common APIs. You are very likely to encounter them in legacy code, even when `Number()` is a better fit for the new code you are writing.

The explicit radix also avoids historical confusion around leading-zero values. Older JavaScript environments could treat a literal such as `010` as octal, so developers were taught to write `parseInt(value, 10)` aggressively. The language has moved on, but the habit remains in many codebases.

---

## Try it Yourself

Try all three methods with `"42"`, `"42px"`, `"12.5"`, and `"12.5px"`. Add a hexadecimal string and pass a radix to `parseInt()`. Explain which method checks the whole value and which methods accept a numeric prefix.

---

## More background

See [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [MDN: parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), and [MDN: parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).

---
