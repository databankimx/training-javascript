# Exercise solution

Here is one reasonable way through this. Your name and greeting can be different; the declaration choices are the part worth explaining.

```javascript
var punctuation = "?";
let greeting = "Welcome";
const name = "Ada";
console.log(greeting + ", " + name + punctuation);
```

```text
Welcome, Ada?
```

The values changed, but the structure of the program did not. `greeting` is declared with `let` because this exercise changes it. `name` and `punctuation` could both be `const` because this version never reassigns them. `var` still works, but it is the older, function-scoped declaration and is usually not the best choice for new code.

The `+` operators concatenate the four pieces into one string. JavaScript reads the current value of each binding when it evaluates the `console.log` argument. If we changed `greeting` later, the next call would use the new value.

---

Run the original and your changed version. Explain which bindings were read, which one was reassigned, and why `const` is appropriate for values that should not be rebound. Then try the invalid reassignment and describe the error in plain language. The goal is not merely to see an error. The goal is to understand which declaration rule produced it.

---
