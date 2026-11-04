# Strict and loose equality - exercise solution

```javascript
const input = "5";
const value = Number(input);

console.log(value === 5);
console.log(value !== 6);
```

```text
true
true
```

The conversion is explicit, so the comparisons can use strict equality without asking the operator to guess what the text means.

---
