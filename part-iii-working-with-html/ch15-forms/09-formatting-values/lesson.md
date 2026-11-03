# Formatting dates and currency

The value that is correct for a program is not always the value that is pleasant for a person to read. `39.98` is useful to JavaScript, but `$39.98` is clearer in an order confirmation. An ISO timestamp is excellent for exchanging data, while a month name and local time are easier to read on a screen.

Before `Intl.*` became the usual tool, developers commonly assembled these strings by hand:

```javascript
function classicCurrency(value) {
  return "$" + value.toFixed(2);
}

function classicDate(value) {
  const month = value.toLocaleString("en-US", { month: "long" });
  return `${month} ${value.getDate()}, ${value.getFullYear()} at ${value.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
}
```

```text
$39.98
November 2, 2026 at 2:30 PM
```

This works for one fixed format, but the code becomes awkward when the currency, language, time zone, or punctuation changes. It is still worth recognizing because legacy applications contain a great deal of it.

---

## The modern locale-aware approach

```javascript
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const readableDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "short" });

summary.textContent = `Order total: ${money.format(39.98)}. Placed: ${readableDate.format(date)}.`;
```

```text
Order total: $39.98. Placed: November 2, 2026 at 2:30 PM.
```

The runnable example shows the classic and modern results together so you can compare the output. They happen to match for this US-English example. The difference becomes important when the audience or currency changes.

`Intl.NumberFormat` and `Intl.DateTimeFormat` use locale-aware rules rather than making us assemble punctuation by hand. The locale and currency are choices, not universal truths. A Canadian dollar amount and a German date should not be formatted as though they were from the United States. Prefer the `Intl.*` classes for new code, while understanding the manual pattern when you inherit it.

> `Intl.NumberFormat` formats numbers, currencies, percentages, and other numeric displays.
>
> `Intl.DateTimeFormat` formats a `Date` for a chosen locale and set of display options.

---

## Try it Yourself

Add a currency selector for USD and EUR. Add a date input and format the chosen date in a long, readable form. Keep the stored values separate from the values shown to the user.

---

## More background

See [MDN: `Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) and [MDN: `Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

---
