## Solution

```javascript
function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

visitNames(["Ada", "Grace", "Linus"], name => console.log(name.toUpperCase()));
```

```text
ADA
GRACE
LINUS
```

The callback transforms each name before printing it. The traversal function does not need to know that uppercase text is the desired result.

---
