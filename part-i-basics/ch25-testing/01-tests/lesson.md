# 13 · Testing behavior with node:test

## Learning goal

13 · Testing behavior with node:test: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The example worked once. Good start. Now let’s find out whether it works because we designed it properly or because we happened to choose a very cooperative input.

A test describes observable behavior and asserts the result. node:test and node:assert/strict are built into Node. Test normal inputs, boundaries, and failures. Keep production logic importable so tests call the same code a real caller uses. A passing test is evidence for the cases it covers, not proof that every input works.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Both tests pass. Node prints a test report even when this example is launched directly.

## Example code

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
const discount = (price, percent) => {
  if (price < 0 || percent < 0 || percent > 100) throw new RangeError('Invalid discount');
  return price * (1 - percent / 100);
};
test('20 percent off 50 is 40', () => assert.equal(discount(50,20),40));
test('rejects negative prices', () => assert.throws(() => discount(-1,20), RangeError));
```

## Expected output

```text
Both tests pass. Node prints a test report even when this example is launched directly.
```

## Walk through the example

The first test checks the observable discount result. The second checks the failure contract: a negative price must throw RangeError. Notice that the guard relies on comparisons. NaN slips past those comparisons, so the extra exercise reveals a real missing validation rule rather than merely adding another passing example.

## Try it yourself

Add tests for 0% and 100%, then test NaN and Infinity. Repair the function so non-finite inputs are rejected.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[Node.js test runner](https://nodejs.org/docs/latest-v24.x/api/test.html).
