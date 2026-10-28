# S04 · Complexity and data structures

## Learning goal

S04 · Complexity and data structures: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Our search is fast with five records. Encouraging, certainly, but production data has a habit of arriving in quantities greater than five.

Big-O describes how work grows with input size, not a stopwatch reading. Scanning every item is O(n); nested scans may be O(n²). Set membership typically avoids repeated linear searches, though JavaScript does not promise a specific implementation. Include setup cost and memory when comparing alternatives. Small examples should count operations before attempting benchmarks.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect true 5 and true. Building the Set also visits all values once.

## Example code

```javascript
const values = [1,2,3,4,5];
let visits = 0;
const found = values.some(value => {
  visits++;
   return value === 5;
});
const index = new Set(values);
console.log(found, visits);
console.log(index.has(5));
```

## Expected output

```text
true 5
```

## Walk through the example

some visits values until it finds the target. Searching for the final value forces five visits. The Set construction makes an index from the same input before asking has. Account for that construction when deciding whether an index is useful for one lookup or many.

## Try it yourself

Compare one search with 1,000 searches over the same collection. Explain when building an index pays off.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
