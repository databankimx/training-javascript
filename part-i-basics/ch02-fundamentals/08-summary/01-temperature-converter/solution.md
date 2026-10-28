# Homework: temperature converter - exercise solution

```javascript
const fahrenheitText = "68";
const fahrenheit = Number(fahrenheitText);
const celsius = (fahrenheit - 32) * 5 / 9;

console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
```

```text
68°F is 20.0°C
```

`Number()` changes the input text into numeric data before the formula runs. The arithmetic follows the conversion formula, and `toFixed(1)` formats the answer for a reader without changing the underlying number. The template literal combines the values and the explanatory text.

---
