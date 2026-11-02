# Solution

One reasonable extension accepts either `ext` or `x` before the extension digits:

```javascript
const pattern = /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}\s?(?:ext|x)?:?\s?\d*$/;
const value = "(713) 483-3111 x42";
console.log(pattern.test(value));
```

```text
true
```

The non-capturing group `(?:ext|x)` allows either label without creating a captured value. The change is intentionally narrow. A production phone-number strategy would usually normalize input first and validate the normalized result rather than endlessly adding punctuation to one expression.
