# Return values

A function can send a value back to its caller with `return`. That lets the caller decide what to do with the result.

```javascript
function add(left, right) {
  return left + right;
}

const total = add(3, 4);
console.log(`Total: ${total}`);
```

> `return` ends the current function call and supplies a value to the caller.
>
> A returned value can be assigned, printed, compared, or passed to another function.

```text
Total: 7
```

`add` does not print anything itself. It returns 7, and the caller stores that result in `total` before printing it.

---

## Try it Yourself

Write a function that returns the larger of two numbers. Use its result in an `if` statement and print a sentence about the winner.

---

## More background

See [MDN: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).

---
