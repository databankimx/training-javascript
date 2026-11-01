# Callbacks

Functions are values in JavaScript, so one function can receive another function as an argument. A function passed this way is called a callback because the receiving function calls it later.

```javascript
function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

const names = ["Ada", "Grace", "Linus"];
visitNames(names, name => console.log(name));
```

> A callback is a function passed to another function.
>
> `action(name)` calls the callback for the current value.

```text
Ada
Grace
Linus
```

`visitNames` controls the loop. The caller supplies the action, so the same loop could print, collect, or validate the names without changing `visitNames` itself. We will use this idea heavily with array methods and browser events.

---

## Try it Yourself

Pass a callback that prints a greeting. Then pass a different callback that prints the name in uppercase.

---

## More background

See [MDN: Functions as values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

---
