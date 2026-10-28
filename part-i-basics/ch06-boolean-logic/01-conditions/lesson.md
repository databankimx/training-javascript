# 06 · Conditions, equality, and missing values

## Learning goal

06 · Conditions, equality, and missing values: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Zero retries is a perfectly reasonable setting. Quietly replacing it with three retries is a decision the application has made on our behalf, and I’m a little judgy about that sort of thing.

Use === and !== for comparisons without coercion. Truthiness converts a value to a boolean in a condition; empty arrays and empty objects are truthy. The || operator chooses its right operand for any falsy left operand. The ?? operator chooses it only for null or undefined. Optional chaining short-circuits access when the preceding value is nullish; it does not validate a data model.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 3, 0, Guest, and false.

## Example code

```javascript
const settings = { retries: 0, user: null };
console.log(settings.retries || 3);
console.log(settings.retries ?? 3);
console.log(settings.user?.name ?? 'Guest');
console.log(5 === '5');
```

## Expected output

```text
Guest
false
```

## Walk through the example

settings.retries is zero, so || uses its fallback while ?? preserves the configured value. Optional chaining stops at the null user, and the following ?? supplies Guest. The last comparison uses strict equality, so the number 5 and string "5" remain different values.

## Try it yourself

Build a label for a product whose price can legitimately be zero. Use "Unknown" only if price is null or undefined.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
