# Math constants

The `Math` object also provides several named constants. `Math.PI` is the familiar one, but it has company. These values are approximations stored by the language, and they are properties, not methods, so there are no parentheses after their names.

```javascript
console.log(Math.PI.toFixed(2));
console.log(Math.E.toFixed(2));
console.log(Math.SQRT2.toFixed(2));
console.log(Math.SQRT1_2.toFixed(2));
console.log(Math.LN2.toFixed(2));
console.log(Math.LN10.toFixed(2));
console.log(Math.LOG2E.toFixed(2));
console.log(Math.LOG10E.toFixed(2));
```

> A constant is a named value that we use as data rather than call as an action. `Math.PI` is a constant; `Math.sqrt()` is a method.
>
> `toFixed(2)` formats each constant for display. The underlying constants are not changed.

```text
3.14
2.72
1.41
0.71
0.69
2.30
1.44
0.43
```

| Constant | Meaning | Output here |
| --- | --- | --- |
| `Math.PI` | Ratio of a circle’s circumference to its diameter | `3.14` |
| `Math.E` | Base of natural logarithms | `2.72` |
| `Math.SQRT2` | Square root of 2 | `1.41` |
| `Math.SQRT1_2` | Square root of one-half | `0.71` |
| `Math.LN2` | Natural logarithm of 2 | `0.69` |
| `Math.LN10` | Natural logarithm of 10 | `2.30` |
| `Math.LOG2E` | Base-2 logarithm of `Math.E` | `1.44` |
| `Math.LOG10E` | Base-10 logarithm of `Math.E` | `0.43` |

The names are deliberately explicit because these values turn up in formulas, graphics, statistics, and scientific code. We do not need to memorize the list. We do need to recognize the names when one appears, and know where to look up the exact meaning.

---

## Try it Yourself

Use `Math.PI` to calculate the circumference and area of a circle with a radius stored in a binding. Format the results for display, but keep the calculations numeric until the final `console.log`. Then look up one of the logarithm constants and find a situation where it would be useful.

---

## More background

See [MDN: Math constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#math_constants) and [MDN: Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI).

---
