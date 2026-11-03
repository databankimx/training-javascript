# Solution

One reasonable extension accepts either `ext` or `x` before the extension digits. It also uses `match()` to show the exact accepted value.

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}\s?(?:ext|x):?\s?\d+$/;
const value = "(713) 483-3111 x42";
const match = value.match(pattern);

console.log(match?.[0] ?? "No match");
```

```text
(713) 483-3111 x42
```

The non-capturing group `(?:ext|x)` allows either label without creating a captured value. The change is intentionally narrow. A production phone-number strategy would usually normalize input first and validate the normalized result rather than endlessly adding punctuation to one expression.

For comparison, `test()` would return only `true` or `false`, while `match()` gives us the matched text. Those methods answer different questions even though they use the same pattern.

---
