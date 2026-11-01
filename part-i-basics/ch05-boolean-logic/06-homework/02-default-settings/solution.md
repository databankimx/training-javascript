# Homework: default settings - exercise solution

```javascript
const settings = { retries: 0, user: null, darkMode: false };

console.log(settings.retries ?? 3);
console.log(settings.user?.name ?? "Guest");
console.log(settings.darkMode === true);
```

```text
0
Guest
false
```

`??` preserves the meaningful zero, optional chaining safely handles the missing user, and strict equality makes the boolean setting explicit.

---
