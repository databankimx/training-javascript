# Logical operators and short-circuiting - exercise solution

```javascript
const signedIn = true;
const isAdmin = false;
const name = "Ada";

console.log(signedIn && name);
console.log(signedIn && isAdmin);
console.log(!signedIn);
```

```text
Ada
false
false
```

The first `&&` returns the second operand because both sides are truthy. The second stops at the falsy administrator flag, and `!` reverses the signed-in boolean.

---
