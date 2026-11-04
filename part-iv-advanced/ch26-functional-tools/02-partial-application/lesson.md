# Partial application and reusable functions

Sometimes a function needs several arguments, but one of them stays the same for a whole section of a program. We can provide that stable argument once and receive a smaller function for the remaining work.

```javascript
const label = (prefix, message) => prefix + ": " + message;
const info = message => label("INFO", message);

console.log(info("ready"));
console.log(info("saved"));
```

```text
INFO: ready
INFO: saved
```

`label` accepts two arguments. The `info` function fixes the first argument as `"INFO"` and leaves `message` for the caller. This is called partial application because we apply part of the argument list now and the rest later.

| Function | Fixed now | Supplied later |
| --- | --- | --- |
| `label` | nothing | `prefix`, `message` |
| `info` | `prefix = "INFO"` | `message` |

The arrow function `message => label("INFO", message)` closes over the fixed prefix. It is not magic, and it is not a new kind of variable. It is an ordinary function value that remembers the value it needs from its surrounding scope.

> Partial application creates a new function by supplying some arguments to an existing function ahead of time. The new function usually has fewer arguments and a narrower job.

## Why bother?

The benefit is consistency as much as brevity. Every call to `info()` uses the same prefix, so a caller cannot accidentally write `INFO` in one place and `INFORMATION` or `Info` in another. The same pattern works for formatters, validators, request builders, and event handlers.

## Try it Yourself

Create `warning` and `error` functions using the same `label` function. Add a `makeLabel(prefix)` function that returns a specialized formatter instead of writing each wrapper by hand.

---
