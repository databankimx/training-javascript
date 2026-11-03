## Solution

The classic version is still common in older code:

```javascript
function classicCurrency(value) {
  return "$" + value.toFixed(2);
}

function classicDate(value) {
  const month = value.toLocaleString("en-US", { month: "long" });
  return `${month} ${value.getDate()}, ${value.getFullYear()}`;
}
```

For new code, prefer the locale-aware formatters:

```javascript
const money = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const readableDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
const date = new Date("2026-11-02T14:30:00");

summary.textContent = `Order total: ${money.format(Number(amount.value))}. Placed: ${readableDate.format(date)}.`;
```

The formatting rules changed without changing the stored number or date. That separation lets the same data be displayed differently for different audiences.

```text
Classic: $39.98. Placed: November 2, 2026.
Order total: 39,98 €. Placed: November 2, 2026.
```

---
