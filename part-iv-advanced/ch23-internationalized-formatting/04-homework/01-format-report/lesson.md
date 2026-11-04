# Homework: internationalized report

Build a short order report with a total, an item count, and an order date.

```javascript
const total = 59.97;
const itemCount = 3;
const orderDate = new Date("2026-01-15T12:00:00Z");
```

Use Intl formatters rather than assembling currency symbols, commas, unit words, or date pieces yourself. The finished program should show:

```text
$59.97
3 items
01/15/2026
```

The total stays a number until `NumberFormat` turns it into display text. The item count stays a number until `PluralRules` tells us whether to use `item` or `items`. The order date stays a `Date` until `DateTimeFormat` presents it for the reader.

## Try it Yourself

Create the formatters yourself, run the report, and then add a second locale. Explain which values remain numbers or Date objects and which values become display text.

The spoiler contains a complete solution.

## Expected output

```text
$59.97
3 items
01/15/2026
```

---

