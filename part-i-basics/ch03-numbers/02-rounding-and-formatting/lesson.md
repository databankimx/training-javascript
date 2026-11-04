# Rounding and formatting numbers

Rounding shows up everywhere a program turns measurements into decisions: prices on an invoice, percentages in a report, quantities in a shipment, or a page count used as a limit. Rounding is not one operation with four spellings. We choose a strategy based on what the number means. A report may need two decimal places, while a quantity may need to be rounded down before it is used as a limit.

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

Here is a brief explanation of the rounding and formatting tools in the example:

| Method | Purpose | Output here |
| --- | --- | --- |
| `Math.round()` | Choose the nearest integer | `20` |
| `Math.floor()` | Round toward negative infinity | `19` |
| `Math.ceil()` | Round toward positive infinity | `20` |
| `Math.trunc()` | Remove the fractional part | `19` |
| `toFixed(2)` | Format with two decimal places | `"19.99"` |

`Math.round()` chooses the nearest integer, `Math.floor()` moves toward negative infinity, `Math.ceil()` moves toward positive infinity, and `Math.trunc()` removes the fractional part. `toFixed(2)` formats a value with two decimal places, but it returns text. That distinction matters if we plan to calculate with the result later. In other words, rounding may change the numeric value, while formatting changes the representation we show to someone.

> Rounding changes a value to a chosen level of precision.
>
> Formatting changes how a value is displayed. `toFixed()` is formatting, even though the display looks rounded.

## What happens at exactly `.5`?

This is where JavaScript may surprise developers coming from C# or Python. `Math.round()` does **not** use banker’s rounding, also called round-half-to-even. It sends an exact `.5` tie toward positive infinity:

```javascript
console.log(Math.round(2.5));
console.log(Math.round(3.5));
console.log(Math.round(-2.5));
console.log(Math.round(-3.5));
```

```text
3
4
-2
-3
```

For positive values, this resembles the elementary-school rule. For negative values, it is not half-away-from-zero: `-2.5` becomes `-2`, not `-3`.

Here are the three policies side by side:

| Policy | `2.5` | `3.5` | `-2.5` | What it is trying to do |
| --- | ---: | ---: | ---: | --- |
| JavaScript `Math.round()` | `3` | `4` | `-2` | Send ties toward positive infinity |
| Banker’s, or half-to-even | `2` | `4` | `-2` | Send ties to the nearest even result and reduce cumulative bias |
| Half-away-from-zero | `3` | `4` | `-3` | Match the familiar human rule in both directions |

JavaScript has no built-in banker’s-rounding method. That makes JavaScript a poor choice for statistical analysis **if we rely on `Math.round()` as the rounding policy**, because repeated half-up-style decisions can introduce rounding drift. The language is capable of statistical work, but the rounding rule must be supplied deliberately, either in our own tested function or through a decimal arithmetic library. If a financial or user-facing rule requires half-away-from-zero, implement or select that policy deliberately as well.

There is a second complication: ordinary JavaScript numbers use binary floating-point storage. A value that looks exactly like `.5` in the source may be stored slightly above or below it, and `toFixed()` can expose that difference. Formatting is not a substitute for choosing a rounding policy.

---

## Try it Yourself

Try positive and negative values with all four `Math` methods. Test `2.5` and `-2.5` with `Math.round()` and explain the direction of each tie. Format a price with two decimal places, then check its type and try adding `1` to it. Explain why formatting a number for display should usually be the last step.

---

## More background

See [MDN: Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), [MDN: Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), and [MDN: toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
