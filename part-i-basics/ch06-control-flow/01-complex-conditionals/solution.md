## Solution

```javascript
const signedIn = true;
const isAdmin = false;
const age = 21;

const canEnter = signedIn && (isAdmin || age >= 18);
const needsReview = !signedIn || (age < 18 && !isAdmin);
const status = signedIn && age >= 18 ? "approved" : "blocked";

console.log(canEnter);
console.log(needsReview);
console.log(status);
```

```text
true
false
approved
```

The parentheses are doing real work here. Since `&&` has higher precedence than `||`, leaving them out would produce `(signedIn && isAdmin) || age >= 18`. That version would allow an adult to enter without being signed in, which is a fairly creative access-control policy.

The written expression requires sign-in first, then accepts either an administrator or an adult. The second expression asks whether the user needs review. The conditional operator makes the small status-label choice without needing another block of control flow.

---
