# S07 · Internationalized formatting

## Learning goal

S07 · Internationalized formatting: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

An amount and the way we display that amount are separate concerns. Mixing them together works beautifully right up until we need a different currency, locale, or calculation.

Intl.NumberFormat and Intl.DateTimeFormat separate values from locale-specific display. Always specify the locale and time zone when an example requires reproducible output. Store timestamps in a standard form and format them at the boundary. A formatted amount is text and must not be parsed back with Number when it contains currency symbols or grouping.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 01/15/2026 and a German-formatted euro amount. Exact spacing can depend on the ICU version.

## Example code

```javascript
const date = new Date('2026-01-15T12:00:00Z');
console.log(new Intl.DateTimeFormat('en-US',{timeZone:'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).format(date));
console.log(new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(1234.5));
```

## Expected output

```text
Expect 01/15/2026 and a German-formatted euro amount. Exact spacing can depend on the ICU version.
```

## Walk through the example

The date string identifies an instant in UTC. DateTimeFormat receives an explicit UTC zone for reproducibility. NumberFormat receives a different locale and currency for the amount. The stored number does not change when the display conventions change.

## Try it yourself

Format the same instant in America/Chicago with a time component. Explain why the calendar date can differ between time zones.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
