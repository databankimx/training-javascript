# The Math library

JavaScript’s built-in `Math` object collects common mathematical operations. We do not import it, and we do not create an instance of it. We call its methods directly, which is pleasantly straightforward for once.

```javascript
const difference = Math.abs(18 - 25);
const lower = Math.min(3, 7, 4);
const upper = Math.max(3, 7, 4);
const square = Math.pow(5, 2);
const root = Math.sqrt(25);

console.log(difference);
console.log(lower);
console.log(upper);
console.log(square);
console.log(root);
console.log(Math.PI.toFixed(2));
```

> `Math.abs()` returns a positive distance from zero.
>
> `Math.min()` and `Math.max()` choose the smallest or largest argument.
>
> `Math.pow(base, exponent)` raises a number to a power. The `**` operator is the newer, shorter syntax for the same idea.
>
> `Math.sqrt()` returns a square root.
>
> `Math.PI` is a built-in constant containing an approximation of pi.

```text
7
3
7
25
5
3.14
```

| Method or property | Purpose | Output here |
| --- | --- | --- |
| `Math.abs()` | Find a positive distance | `7` |
| `Math.min()` | Choose the smallest argument | `3` |
| `Math.max()` | Choose the largest argument | `7` |
| `Math.pow()` | Raise a value to a power | `25` |
| `Math.sqrt()` | Find a square root | `5` |
| `Math.PI` | Supply an approximation of pi | `3.14` after formatting |

The `Math` methods return numbers. `toFixed(2)` appears only on the last line, so the displayed value of pi has two decimal places without turning every later calculation into string work.

---

## Try it Yourself

Use `Math.abs()` to find the distance between two values. Use `Math.min()` and `Math.max()` to keep a value inside a lower and upper limit. Calculate a cube with both `Math.pow()` and the `**` operator, then find its cube root if you wish to look up the next method.

Try `Math.random()` as well, but do not use it in a test that needs predictable output. Randomness is useful, and it is also a poor colleague when we are trying to reproduce a bug.

---

## More background

See [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and [MDN: exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation).

---
