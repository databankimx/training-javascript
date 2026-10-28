# Rounding and formatting numbers

Rounding is not one operation with four spellings. We choose a strategy based on what the number means. A report may need two decimal places, while a quantity may need to be rounded down before it is used as a limit.

```javascript
const amount = 19.987;

console.log(Math.round(amount));
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.trunc(amount));
console.log(amount.toFixed(2));
console.log(typeof amount.toFixed(2));
```

```text
20
19
20
19
19.99
string
```

| Method | Purpose | Output here |
| --- | --- | --- |
| `Math.round()` | Choose the nearest integer | `20` |
| `Math.floor()` | Round toward negative infinity | `19` |
| `Math.ceil()` | Round toward positive infinity | `20` |
| `Math.trunc()` | Remove the fractional part | `19` |
| `toFixed(2)` | Format with two decimal places | `"19.99"` |

`Math.round()` chooses the nearest integer, `Math.floor()` moves toward negative infinity, `Math.ceil()` moves toward positive infinity, and `Math.trunc()` removes the fractional part. `toFixed(2)` formats a value with two decimal places, but it returns text. That distinction matters if we plan to calculate with the result later.

> Rounding changes a value to a chosen level of precision.
>
> Formatting changes how a value is displayed. `toFixed()` is formatting, even though the display looks rounded.

---

## Try it Yourself

Try positive and negative values with all four `Math` methods. Format a price with two decimal places, then check its type and try adding `1` to it. Explain why formatting a number for display should usually be the last step.

---

## More background

See [MDN: Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), [MDN: Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), and [MDN: toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
