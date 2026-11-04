# Strings and formatting - exercise solution

Here is one reasonable way through this exercise. Keep the calculation numeric, and format the result only when we are ready to display it.

```javascript
const itemPrice = 2.75;
const quantity = 3;
const total = itemPrice * quantity;
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total));
```

```text
$8.25
```

The multiplication happens while both values are numbers. Currency formatting happens at the display boundary, which keeps arithmetic reliable and prevents strings such as `"$2.75"` from wandering into calculations.

---

Try the same receipt with a different quantity, and then add a cleaned-up customer name. The output should change without changing the type of the values used for arithmetic.

---
