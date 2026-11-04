# Number values and checks

JavaScript uses one main `number` type for integers and decimal values. That is convenient, but it means we should check what we actually received before doing work with it. A form field, query-string value, or imported spreadsheet cell may look numeric while still being text. Text that looks numeric is still text until we convert it.

```javascript
const whole = 42;
const decimal = 19.95;
const text = "42";

console.log(typeof whole);
console.log(Number.isInteger(whole));
console.log(Number.isInteger(decimal));
console.log(Number.isFinite(Number(text)));
console.log(Number.isNaN(Number("oops")));
```

```text
number
true
false
true
true
```

Here is a brief explanation of the checks in the example:

| Method | Purpose | Output here |
| --- | --- | --- |
| `typeof` | Identify the value’s JavaScript type | `number` |
| `Number.isInteger()` | Check for a whole number | `true`, then `false` |
| `Number.isFinite()` | Check for an ordinary finite number | `true` |
| `Number.isNaN()` | Check for the failed-conversion value `NaN` | `true` |

The methods are related, but they answer different questions. Choose the check that matches what the next line of code needs to know: whole number, usable finite number, or failed conversion.

> `NaN` means “Not a Number,” although JavaScript stores it using the `number` type. Naming things is not always the language’s strongest feature.
>
> `Number.isInteger()` and the other `Number.is...` methods check the value without silently converting unrelated text first.

---

## Try it Yourself

Check an integer, a decimal, `Infinity`, and the result of converting invalid text. Predict each result before you run the program. Then change the values and explain which check answers the question you actually have.

---

## More background

See [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [Number.isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), and [Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite).

---
