# Project 2.1 · Validate and summarize data

## Learning goal

Project 2.1 · Validate and summarize data: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Before drawing an attractive chart, let’s check the numbers. A polished picture of invalid data is still invalid data, although admittedly it photographs better.

A chart is only useful if its input means what the labels claim. Begin with records, validate numeric values, calculate totals, and identify the maximum. This stage deliberately uses a local fixture so network access does not distract from transformation. Separate loading, validation, analysis, and rendering so later stages can reuse the same decisions.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect Total: 60, Mean: 15, Maximum: 21.

## Example code

```javascript
const rows=[{month:'Jan',hours:12},{month:'Feb',hours:18},{month:'Mar',hours:9},{month:'Apr',hours:21}];
if(!rows.every(row=>typeof row.month==='string'&&Number.isFinite(row.hours)&&row.hours>=0))throw new Error('Invalid row');
const total=rows.reduce((sum,row)=>sum+row.hours,0);
console.log('Total:',total);
console.log('Mean:',total/rows.length);
console.log('Maximum:',Math.max(...rows.map(row=>row.hours)));
```

## Expected output

```text
Expect Total: 60, Mean: 15, Maximum: 21.
```

## Walk through the example

The validation pass requires a month string and a finite nonnegative number. The summary calculations then operate on a known shape. Empty input is the remaining boundary: reduce has an initial zero, but average and maximum need their own no-data policy.

## Try it yourself

Handle an empty dataset explicitly and add one malformed record to verify validation.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
