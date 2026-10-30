# `do...while` loops

A `while` loop may run zero times. A `do...while` loop runs its block first, then checks the condition. That makes it useful when an action must happen at least once, such as displaying a prompt.

```javascript
let attempts = 0;

do {
  attempts += 1;
  console.log("Prompt shown");
} while (attempts < 1);

console.log(attempts);
```

> `do...while` checks its condition after the block.
>
> Because the block runs first, a `do...while` loop always runs at least once.

```text
Prompt shown
1
```

The condition is already false after `attempts` becomes 1, but the prompt still appeared once. A plain `while` loop would check first and could skip the block entirely.

---

## Try it Yourself

Change the starting value and condition. Compare the result with an equivalent `while` loop and note when the two forms behave differently.

---

## More background

See [MDN: do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while).

---
