# S15 · Tabular transformations (pandas counterpart)

## Learning goal

S15 · Tabular transformations (pandas counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We have rows of data and a question about them. A few clear transformations can get us quite far before we need to introduce an entire data-analysis ecosystem.

Arrays of records support many small table operations with filter, map, and reduce. Grouping requires an accumulator keyed by group. This is not a full DataFrame implementation: missing values, joins, schema changes, and large datasets deserve explicit handling. Avoid splitting arbitrary CSV on commas; quoted fields require a real parser.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect {A:6,B:3} and 2.

## Example code

```javascript
const rows = [{team:'A',hours:2},{team:'B',hours:3},{team:'A',hours:4}];
const totals = new Map();
for (const row of rows) totals.set(row.team,(totals.get(row.team) ?? 0)+row.hours);
console.log(Object.fromEntries(totals));
console.log(rows.filter(row => row.hours >= 3).length);
```

## Expected output

```text
Expect {A:6,B:3} and 2.
```

## Walk through the example

The loop uses team as the grouping key and adds each row’s hours to that group. Object.fromEntries gives a printable record of totals. The second operation independently filters qualifying rows. Adding means requires both a sum and a count rather than repeatedly averaging partial averages.

## Try it yourself

Compute count and mean hours by team. Reject rows with non-finite hours.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
