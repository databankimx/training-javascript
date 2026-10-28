# Number values and checks - exercise solution

```javascript
const value = Number("19.95");

console.log(typeof value);
console.log(Number.isInteger(value));
console.log(Number.isFinite(value));
console.log(Number.isNaN(Number("not a price")));
```

```text
number
false
true
true
```

The text is converted before the checks run. The result is a finite decimal number, not an integer, and the separate invalid conversion produces `NaN`.

---
