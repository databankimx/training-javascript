# Homework: apply a callback

Use the traversal function and pass a callback that prints each name in uppercase.

```javascript
function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

visitNames(["Ada", "Grace", "Linus"], name => console.log(/* uppercase name */));
```

```text
ADA
GRACE
LINUS
```

---

## Try it Yourself

Complete the callback. Then pass a second callback that prints the length of each name.

Use **Show example (spoiler)** after you have tested both callbacks.

---

## More background

See [MDN: toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).

---
