# Homework: string report - exercise solution

```javascript
const rawName = "  Ada Lovelace  ";
const note = "Ada is learning JavaScript.";
const name = rawName.trim();

console.log(`Name: ${name}`);
console.log(`Length: ${name.length}`);
console.log(`Topic: ${note.includes("JavaScript") ? "JavaScript" : "something else"}`);
```

```text
Name: Ada Lovelace
Length: 12
Topic: JavaScript
```

The cleaned name is stored separately, so the original value remains available for comparison. `length` reports the number of characters in the cleaned name. `includes()` supplies a boolean, and the conditional expression turns that boolean into a useful label for the report.

---
