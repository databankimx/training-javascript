# S02 · Recursion and termination

## Learning goal

S02 · Recursion and termination: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Recursion is a useful way to describe a problem in terms of a smaller problem. It becomes less useful when we forget the part where the problem gets smaller.

A recursive function solves a smaller version of the same problem. It needs a base case and a step that approaches it. JavaScript call stacks have finite depth, so recursion is appropriate for bounded trees but an iterative approach may be safer for very deep data. Validate inputs before recursing; a negative factorial input otherwise moves forever away from zero.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 120 and 1. The upper bound keeps the example within a conservative exact-number range.

## Example code

```javascript
function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) throw new RangeError('Use an integer from 0 to 18');
  return n < 2 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));
```

## Expected output

```text
120
1
```

## Walk through the example

The guard accepts only a small integer range. Values below two return one immediately, establishing the base case. Other calls multiply n by the result of the smaller call. Trace factorial(3) in both directions: descending calls and returning results are separate parts of the explanation.

## Try it yourself

Write an iterative version and compare results from 0 through 10. What changes if you need very large factorials?

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
