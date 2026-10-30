# Missing values and defaults - exercise solution

```javascript
const count = 0;
const label = "";
const user = null;

console.log(count ?? 10);
console.log(label ?? "Unnamed");
console.log(user?.name ?? "Guest");
```

```text
0

Guest
```

`??` preserves both zero and empty text because neither value is nullish. Optional chaining safely handles the missing user, and the final fallback supplies a display name.

---
