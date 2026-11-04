# Missing values and defaults

Defaults are useful when data is missing, but “missing” is not the same as “empty” or zero. The `||` operator treats every falsy value as a reason to use its fallback. The newer `??` operator uses its fallback only for `null` or `undefined`.

```javascript
const settings = { retries: 0, user: { name: "Ada" } };
const missingUser = null;

console.log(settings.retries || 3);
console.log(settings.retries ?? 3);
console.log(missingUser?.name ?? "Guest");
console.log(settings.user?.name ?? "Guest");
```

> `null` and `undefined` are nullish values. They commonly mean that data is absent.
>
> `??` uses its right side only when the left side is `null` or `undefined`.
>
> Optional chaining, `?.`, stops a property lookup when the value before it is nullish instead of throwing an error.

```text
3
0
Guest
Ada
```

The first line replaces a legitimate zero because `0` is falsy. The second line preserves zero because `??` asks the narrower question: is the value actually missing? Optional chaining protects the lookup on `missingUser`, and `??` supplies the fallback afterward.

---

## Try it Yourself

Try `0`, `""`, `false`, `null`, and `undefined` with both `||` and `??`. Add an object with a missing nested property and use optional chaining before a fallback. Explain which values should be preserved by the application.

---

## More background

See [MDN: Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) and [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

---
