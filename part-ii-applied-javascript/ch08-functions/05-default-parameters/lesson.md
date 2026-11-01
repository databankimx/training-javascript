# Default parameters

A default parameter supplies a value when the caller leaves an argument out. It keeps the ordinary call simple while still allowing an override.

```javascript
function label(name, style = "friendly") {
  console.log(`${name} [${style}]`);
}

label("Ada", "formal");
label("Grace");
```

> A default parameter is used when the corresponding argument is `undefined`, including when the argument is omitted.

```text
Ada [formal]
Grace [friendly]
```

The first call supplies its own style. The second call leaves the argument out, so the function uses `"friendly"`.

---

## Try it Yourself

Add a default language or unit parameter to a function. Call it once with an override and once without one.

---

## More background

See [MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

---
