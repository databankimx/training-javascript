# Exercise solution

Here is one way to use the same radius in two formulas and delay formatting until the results are ready to display.

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

`Math.PI` supplies the constant used by both circle formulas. The calculations remain numbers until `toFixed(2)` formats the final values for the reader. The formulas are doing the mathematical work; the formatting is only deciding how many decimal places the reader should see.

---
