# Errors and failure paths

Programs do not receive perfect input. A function can return an ordinary value for a valid input and a deliberate failure result for an invalid one.

```javascript
function parseScore(text) {
  const score = Number(text);
  return Number.isNaN(score) ? "Invalid number" : score;
}

console.log(parseScore("12"));
console.log(parseScore("twelve"));
```

> A failure path is the code that handles an input or situation the ordinary path cannot use.
>
> `Number.isNaN(value)` checks whether a value is the special `NaN` result.

```text
12
Invalid number
```

This function chooses a readable result instead of allowing an invalid numeric value to travel farther into the program. Returning a failure message is appropriate when the caller can handle it as an ordinary result.

---

## Try it Yourself

Reject negative scores as well as non-numbers. Decide whether the function should return a message or throw an error for each case.

---

## More background

See [MDN: Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).

---
