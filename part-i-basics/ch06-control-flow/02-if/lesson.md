# Control flow with `if`

Conditions become useful when they control which statements run. An `if` statement checks a condition and runs its block only when that condition is truthy.

```javascript
const signedIn = true;

if (signedIn) {
  console.log("Access granted");
}
```

> `if (condition) { ... }` runs its block when the condition is truthy.
>
> A block is the group of statements between the braces. The block belongs to the `if` statement, so it runs or does not run as a unit.
>
> When there is only one statement to run, JavaScript allows the braces to be omitted: `if (signedIn) console.log("Access granted");` We still recommend braces in most code because they make the boundary obvious and leave room for future lines without inviting mistakes.

```text
Access granted
```

Because `signedIn` is `true`, JavaScript runs the `console.log` statement inside the block. If we change it to `false`, the program reaches the end without printing anything. That is perfectly valid, although not always helpful to the person using the program.

---

## Try it Yourself

Change `signedIn` to `false` and run the program again. Then add a second, independent `if` statement that prints a message when a user has administrator privileges. Test the four possible combinations and explain which blocks run.

---

## More background

See [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

---
