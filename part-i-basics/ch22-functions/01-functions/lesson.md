# 09 · Functions, scope, and pure logic

## Learning goal

09 · Functions, scope, and pure logic: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A useful function does one understandable job. If it also prints a receipt, changes a global variable, and sends an email, I would like a word with it.

A function groups a computation behind a name and parameters. A parameter receives a value; return sends a value back. A function without return produces undefined. Block-scoped let and const bindings exist inside their block. Arrow functions capture the surrounding this instead of creating a call-dependent this. Keep calculations independent of console output so they can be tested and reused.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 30 and 33. The function computes; the caller decides how to display the result.

## Example code

```javascript
function subtotal(prices, taxRate = 0) {
  const base = prices.reduce((sum, price) => sum + price, 0);
  return base * (1 + taxRate);
}
console.log(subtotal([10, 20]));
console.log(subtotal([10, 20], 0.1));
```

## Expected output

```text
30
33
```

## Walk through the example

subtotal receives the array and an optional rate. reduce calculates the base without changing the array, then return sends the result to the caller. Both console.log calls use the same function with different arguments. The test cases belong at that function boundary, where we can vary inputs without simulating a screen.

## Try it yourself

Reject negative prices and tax rates. Add one case with an empty list. Consider rounding policy for real money.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
