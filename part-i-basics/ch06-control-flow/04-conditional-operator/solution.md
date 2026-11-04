## Solution

```javascript
const age = 21;
const displayName = "";

const ageLabel = age >= 18 ? "Adult" : "Minor";
const greeting = displayName ? `Hello, ${displayName}` : "Hello, guest";

console.log(ageLabel);
console.log(greeting);
```

```text
Adult
Hello, guest
```

Each expression chooses one value. The empty display name is falsy, so the greeting uses its alternate value. This is a good size for the conditional operator. If either branch grew into several lines, the same decision would be easier to follow as an `if` statement.

---
