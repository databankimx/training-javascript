# S14 · Typed arrays (NumPy counterpart)

## Learning goal

S14 · Typed arrays (NumPy counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A numeric buffer is useful when we care about how values are stored. It does not automatically bring along the rest of NumPy, much as I might appreciate that arrangement.

Typed arrays store fixed-width numeric values backed by an ArrayBuffer. Float64Array is useful for numeric buffers, but it does not supply NumPy broadcasting, multidimensional indexing, or linear algebra. subarray creates a view over shared memory; slice copies values. Choose a JavaScript numeric library separately if those broader operations are needed.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect [10,2,3] and 5. The view changes the original buffer.

## Example code

```javascript
const values = new Float64Array([1,2,3]);
const view = values.subarray(0,2);
view[0] = 10;
console.log([...values]);
const sum = values.reduce((a,b) => a+b,0);
console.log(sum / values.length);
```

## Expected output

```text
10, 2, 3
5
```

## Walk through the example

subarray exposes the first two values through the same backing buffer. Writing through that view changes values[0]. reduce then reads the modified numeric values and the mean becomes five. Changing to slice gives an independent buffer and a different result for the original collection.

## Try it yourself

Use slice instead of subarray and show that the original remains unchanged. Compute the mean of an empty buffer safely.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
