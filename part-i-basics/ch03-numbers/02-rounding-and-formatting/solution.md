# Rounding and formatting numbers - exercise solution

```javascript
const price = 7.456;
const roundedPrice = Math.round(price * 100) / 100;

console.log(roundedPrice);
console.log(roundedPrice.toFixed(2));
```

```text
7.46
7.46
```

Multiplying by 100 moves the cents into the integer position, `Math.round()` chooses the nearest cent, and dividing by 100 moves the decimal point back. `toFixed(2)` then produces the display text with exactly two decimal places.

---
