# Data types - exercise solution

Here is one reasonable way through this exercise:

```javascript
const price = 19.99;
const description = "Notebook";
const available = true;
console.log(typeof price);
console.log(typeof description);
console.log(typeof available);
```

```text
number
string
boolean
```

The values themselves determine the reported types. The declaration is `const` because none of the bindings needs to be reassigned.

---

Try changing `available` to `"yes"`. The value may sound like the same answer to a human, but JavaScript correctly reports a string because the quotes changed the data type.

---
