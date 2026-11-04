# Solution

Each factory call creates a callback with its own captured label.

```javascript
const saveAda = makeSaver("Ada");
const saveGrace = makeSaver("Grace");
console.log(saveAda());
console.log(saveGrace());
```

```text
Ada: saved
Grace: saved
```

---

