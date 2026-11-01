# `do...while` loops

A `while` loop may run zero times. A `do...while` loop runs its block first, then checks the condition. That makes it useful when an action must happen at least once, such as displaying a prompt, showing a menu, or asking for input before deciding whether to ask again.

```javascript
let attempts = 0;

do {
  attempts++;
  console.log("Prompt shown");
} while (attempts < 1);

console.log(attempts);
```

> `do...while` checks its condition after the block.
>
> Because the block runs first, a `do...while` loop always runs at least once.
>
> `attempts++` adds one to the counter. `attempts += 1` is an equivalent spelling that can be useful when the amount being added is more complicated than one.

```text
Prompt shown
1
```

The condition is already false after `attempts` becomes 1, but the prompt still appeared once. A plain `while` loop would check first and could skip the block entirely. The difference is small in punctuation and large in behavior, which is a very JavaScript way to spend an afternoon.

---

## Try it Yourself

Change the starting value and condition. Compare the result with an equivalent `while` loop and note when the two forms behave differently.

---

## More background

See [MDN: do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while).

---
