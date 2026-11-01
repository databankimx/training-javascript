## Solution

```javascript
function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

const names = ["Ada", "Grace", "Linus"];
visitNames(names, name => console.log(name));
```

```text
Ada
Grace
Linus
```

The callback is called once for each value, while `visitNames` remains responsible for traversal.

---
