# Control flow with `if`

Conditions become useful when they control which statements run. An `if` statement lets the program do something only when a condition is true enough to matter. That is the basic shape behind permission checks, validation messages, optional calculations, and a considerable number of buttons that seem to have developed opinions.

Start with one condition and one possible action:

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

Because `signedIn` is `true`, JavaScript runs the `console.log` statement inside the block. If we change it to `false`, JavaScript skips the block and continues after it. The program is still valid, although silently doing nothing is not always helpful to the person using it.

The braces define the block controlled by the `if`. Keep that boundary clear as examples grow. JavaScript permits the one-line version `if (signedIn) console.log("Access granted");`, but braces are still recommended in most code because they make future edits safer and easier to scan.

---

## Try it Yourself

Change `signedIn` to `false` and run the program again. Then add a second, independent `if` statement that prints a message when a user has administrator privileges. Test the four possible combinations and explain which blocks run.

---

## More background

See [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

---
