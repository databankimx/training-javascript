# Template literals - exercise solution

Here is one reasonable way through the exercise:

```javascript
const product = "Notebook";
const quantity = 3;
const price = 2.75;
const total = quantity * price;

console.log(`${quantity} ${product}s cost $${total.toFixed(2)}.`);
```

```text
3 Notebooks cost $8.25.
```

The multiplication happens before interpolation, so `total` remains a number until `.toFixed(2)` formats it for display. The template literal handles the sentence without scattering spaces and punctuation across several strings.

---
