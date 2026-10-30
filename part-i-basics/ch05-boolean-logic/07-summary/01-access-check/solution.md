# Homework: access check - exercise solution

```javascript
const user = { signedIn: true, role: "admin" };
const canAccess = user.signedIn === true && user.role === "admin";

console.log(canAccess ? "Access granted" : "Access denied");
console.log(canAccess);
```

```text
Access granted
true
```

Each requirement uses strict equality, and `&&` requires both checks to pass. The conditional operator turns the boolean into a message for the reader.

---
