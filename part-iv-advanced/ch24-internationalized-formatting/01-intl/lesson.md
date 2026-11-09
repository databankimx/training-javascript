# Internationalized formatting

The value we store and the way we display that value are different concerns. A price should remain a number while we calculate with it. It becomes formatted text only when we show it to a person. Mixing those jobs is how a perfectly innocent `$1,234.50` ends up being treated as though it were a number. It is text. The dollar sign is a bit of a clue.

JavaScript's `Intl` APIs handle locale-specific display rules for us. They know that the United States and Germany use different grouping and decimal separators, and that currencies belong before or after the amount depending on the locale.

> Internationalization, usually shortened to **i18n**, means preparing software to work naturally for people in different regions and languages. The `Intl` namespace supplies the locale-aware formatting rules instead of making us hard-code English punctuation and word order.

```javascript
const amount = 1234.5;

const us = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const german = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

console.log(us.format(amount));
console.log(german.format(amount));
```

```text
$1,234.50
1.234,50 €
```

The number is still `1234.5`. The formatter returns text, including the currency symbol and grouping separators. Do not parse that formatted text back into a number. Keep the original numeric value for calculations.

Here is a brief explanation of the pieces we used:

| Option | Purpose |
| --- | --- |
| `style: "currency"` | Display a monetary amount |
| `currency: "USD"` | Choose the currency rules and symbol |
| `minimumFractionDigits` | Control the minimum decimal places |
| `useGrouping` | Enable or disable thousands separators |

The first argument to `format()` is the value to display. The formatter does not change `amount`, and it does not return another number. It returns a string intended for a reader.

> A locale is not just a language. It carries conventions for decimal separators, grouping, currency placement, dates, and more. Specify the locale when output must be predictable.

## Dates need a time zone

Date values represent an instant. `Intl.DateTimeFormat` decides how that instant should look in a particular locale and time zone.

```javascript
const date = new Date("2026-01-15T12:00:00Z");
const formatDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

console.log(formatDate.format(date));
```

```text
01/15/2026
```

The explicit UTC zone makes the example reproducible. If we formatted the same instant in a time zone several hours behind UTC, the local calendar date could be the previous day.

That distinction matters in real applications. An invoice timestamp, a meeting invitation, and a birthday are all dates, but they do not all mean the same thing. An instant such as `2026-01-15T12:00:00Z` describes one moment worldwide. A birthday may be a calendar date with no meaningful time zone at all. Decide what the data means before choosing how to format it.

Here is a brief explanation of the date options:

| Option | Purpose |
| --- | --- |
| `timeZone` | Choose the zone used to turn the instant into local calendar fields |
| `year`, `month`, `day` | Choose the individual date pieces to display |
| `dateStyle` | Choose a complete short, medium, long, or full date |
| `timeStyle` | Add a complete time presentation |

## Try it Yourself

Format the same amount as Japanese yen and Canadian dollars. Format the same instant in `America/Chicago` with a time component. Explain why the amount and the instant did not change, even though their display did.

---
