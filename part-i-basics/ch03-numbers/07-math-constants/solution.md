# Math constants - exercise solution

```javascript
const radius = 3;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius ** 2;

console.log(circumference.toFixed(2));
console.log(area.toFixed(2));
```

```text
18.85
28.27
```

`Math.PI` supplies the constant used by both circle formulas. The calculations remain numbers until `toFixed(2)` formats the final values for the reader.

---
