# Calculating form values

Form controls return values as strings, even when the control looks numeric. That is convenient for displaying what the user typed, but arithmetic needs actual numbers. A subtotal is a useful first example because it combines two fields, performs a calculation, and formats the result for a person to read.

```javascript
const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");
const total = document.querySelector("#total");

document.querySelector("#calculate").addEventListener("click", () => {
  const subtotal = Number(quantity.value) * Number(price.value);
  total.textContent = `Total: $${subtotal.toFixed(2)}`;
});
```

```text
Quantity: 2
Price: 19.99
Total: $39.98
```

`Number()` converts each input value before multiplication. `toFixed(2)` formats the result with two decimal places, which is what people usually expect to see for a currency display. The calculation and the formatting are separate jobs, even though they happen next to each other here.

---

## Try it Yourself

Add a second item with its own quantity and price. Calculate both line totals and then add them for a final total. Try a blank field and decide what validation message should appear before the calculation runs.

---

## More background

See [MDN: `Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [MDN: `Number.prototype.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).

---
