# Homework: access check

Create an access check for an administrator page. Access requires a signed-in user and the exact role string `"admin"`. Print a message and the boolean result.

```javascript
const user = { signedIn: true, role: "admin" };
const canAccess = /* combine two strict checks */;

console.log(/* choose the message */);
console.log(canAccess);
```

```text
Access granted
true
```

---

## Try it Yourself

Test a signed-out administrator, a signed-in regular user, and a user whose role differs only in letter case. Explain why each result changes. Do not use loose equality to make the check shorter.

Use **Show example (spoiler)** after you have written and tested your first version.

---

## More background

See [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_operators) and [MDN: Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

---
