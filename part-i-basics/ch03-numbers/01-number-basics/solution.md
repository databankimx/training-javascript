# Exercise solution

Here is one reasonable way to check a converted value. Your test value can be different; the important part is matching each check to the question it answers.

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

The text is converted before the checks run. The result is a finite decimal number, not an integer, and the separate invalid conversion produces `NaN`. Notice that the checks do not silently convert the value for us. We decide when conversion happens, then ask the questions that matter.

---
