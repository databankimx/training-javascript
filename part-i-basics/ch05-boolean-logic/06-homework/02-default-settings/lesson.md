# Homework: default settings

Use the settings below to produce three lines: the retry count, a safe display name, and whether dark mode is enabled. Preserve a retry count of zero, and use `Guest` only when the user data is absent.

```javascript
const settings = { retries: 0, user: null, darkMode: false };

console.log(/* preserve zero while choosing a default */);
console.log(/* safely read the missing user name */);
console.log(/* report the boolean setting */);
```

```text
0
Guest
false
```

---

## Try it Yourself

Try an empty display name, a missing settings object, and a retry count of `null`. Compare `||` and `??`, and explain which values should count as missing in each case.

Reveal the example only after you have tested at least two settings combinations.

---

## More background

See [MDN: Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

---
