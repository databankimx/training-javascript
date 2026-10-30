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

Parentheses make the grouped choice explicit. Since `&&` has higher precedence than `||`, leaving out the parentheses would produce `(signedIn && isAdmin) || age >= 18`. That would allow an adult to enter without being signed in. The written expression requires sign-in and then accepts either an administrator or an adult. The second expression asks whether the user needs review. The conditional operator selects the status label.

---
