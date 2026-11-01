# Homework: temperature converter

Write a small program that converts a temperature from Fahrenheit to Celsius. This is a compact way to revisit values, `Number()`, arithmetic, and template literals without asking a framework to do the thinking for us.

Use this formula:

```text
Celsius = (Fahrenheit - 32) * 5 / 9
```

Here is a starting shape. The parts that do the work are yours to fill in:

```javascript
const fahrenheitText = "68";
const fahrenheit = /* convert the text */;
const celsius = /* apply the formula */;
console.log(/* format the result */);
```

Start with the text value `"68"`, convert it to a number, calculate Celsius, and print a sentence that includes one decimal place. Then try another temperature and one invalid value. What happens when the conversion produces `NaN`?

---

## Hints

- Use `Number()` before doing the arithmetic.
- Use `.toFixed(1)` when you format the result for display.
- A template literal keeps the final sentence readable.

---

## Try it Yourself

Write the conversion in `main.js`, run it, and test a freezing temperature, a warm temperature, and text that is not a number. Explain which value is a string, which value is a number, and where the decimal formatting happens.

When you are ready to compare one working approach, use **Show example (spoiler)** beside the editor. The example is a conversation starter, not a commandment carved into a particularly nervous stone.

---

## More background

See [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [MDN: Number.prototype.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
