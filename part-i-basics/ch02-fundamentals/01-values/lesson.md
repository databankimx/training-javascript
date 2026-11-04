# Values, bindings, and coercion

Forms, query strings, and text boxes usually hand us strings. That is perfectly reasonable, right up until we try to add two to one. JavaScript will do its best to help, which is sometimes how we arrive at a result like `52` when we were expecting `7`.

Consider this code:

```javascript
const raw = "5";
let count = Number(raw);
count += 2;
console.log(raw + 2);
console.log(count);
console.log(Number.isNaN(Number("five")));
```

> `Number()` converts a value to a number when JavaScript can make that conversion.
>
> `Number.isNaN()` checks whether a value is the special `NaN` result produced by a failed numeric conversion. `NaN` stands for “Not a Number.”

The output is:

```text
52
7
true
```

The three lines are intentionally next to one another so we can compare the original text, the converted number, and the failed conversion. The output is not a collection of unrelated tricks. It is one story about the same data changing as it moves through the program.

## What happened here

`raw` contains the string `"5"`. `Number(raw)` converts that string to the number `5`, which we store in `count`. The `+=` operator adds two to the current value of `count`.

The first `console.log` still uses the original string, so `raw + 2` concatenates them into `"52"`. The last line converts `"five"`, gets `NaN`, and asks `Number.isNaN` whether that result really is NaN.

That difference is the reason conversion deserves its own lesson. JavaScript is willing to combine values in ways that can be convenient, but the result is only useful if we understand which type participated in the operation.

> A value is a piece of data, such as a string, a number, or a boolean.
>
> A type describes what kind of value we have and what operations make sense for it.
>
> Coercion is JavaScript converting a value from one type to another. We will usually convert input explicitly so the result is not a surprise wearing a small hat.
>
> `NaN` means “Not a Number.” It is a special numeric value that reports a failed numeric conversion.

With those terms in place, we can compare the three conversion methods without treating them as interchangeable spelling variations.

## Number, parseInt, or parseFloat?

All three methods can turn string data into numbers, but they do different jobs. `Number()` performs type conversion on the whole value. `Number.parseInt()` and `Number.parseFloat()` read a string character by character and stop when the characters no longer look like the kind of number they are parsing.

For general type conversion, modern JavaScript usually prefers `Number()`. It is stricter about the whole value, and it handles both integers and floating-point values. The parse methods are still useful when we deliberately want to read a numeric prefix from a longer string.

| Method | Purpose | Example output |
| --- | --- | --- |
| `Number("12.5")` | Convert the whole string | `12.5` |
| `Number.parseInt("12.5", 10)` | Read an integer prefix in base 10 | `12` |
| `Number.parseFloat("12.5")` | Read a decimal prefix | `12.5` |

> `Number.parseInt("12.5", 10)` reads an integer prefix and returns `12`. The `10` is the radix, which tells JavaScript to read the string as base ten.
>
> `Number.parseFloat("12.5")` reads a floating-point prefix and returns `12.5`.
>
> Developers once reached for `parseInt(value, 10)` almost automatically because older JavaScript engines treated numeric literals with leading zeroes, such as `010`, as octal. That historical trap made the explicit base-ten radix especially important. `Number()` is now the clearer default when the entire value should be converted.
>
> You are very likely to encounter both `parseInt()` and `parseFloat()` in legacy code, so learn to recognize what those calls are trying to do even when you choose `Number()` in new code.

---

## Try it Yourself

Write a conversion that accepts a numeric string and rejects a value that is not finite. Try `"12.5"`, `"apple"`, and `"Infinity"`. Decide how you want to treat an empty string, and explain that decision in a comment or a note.

Try changing `raw` to `"5.5"`, and predict both the concatenated result and the numeric result before you run the program. If the two answers are different, congratulations, JavaScript has found the teaching opportunity for us.

If you can explain why `"5" + 2` and `Number("5") + 2` are different, you are ready for the next step.

---

## More background

See [MDN: Values, variables, and literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types), [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), and [MDN: parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt). The useful sections are enough; there is no prize for reading the whole reference page in one sitting.

---
