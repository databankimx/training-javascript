# 08 · Interactive input and validation

## Learning goal

08 · Interactive input and validation: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The user types a number, so naturally we have a number. Except we don’t. We have text, and now we get to decide what that text is allowed to mean.

Terminal input arrives as text, even when a user types digits. node:readline/promises provides an asynchronous question method. Await the answer, validate it, and close the interface in finally so an error does not leave the process waiting. A loop can request another value after invalid input, but keep conversion and policy checks separate.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The program waits at How many lessons?. Enter 3 in the input box and press Send; expect Plan: 3 lessons.

## Example code

```javascript
import { createInterface } from 'node:readline/promises';
const rl = createInterface({ input: process.stdin, output: process.stdout });
try {
  const raw = await rl.question('How many lessons? ');
  const count = Number(raw);
  if (!raw.trim() || !Number.isInteger(count) || count < 0) throw new Error('Enter a nonnegative integer');
  console.log(`Plan: ${count} lessons`);
}finally {
  rl.close();
}
```

## Expected output

```text
Plan: 3 lessons
```

## Walk through the example

createInterface connects the child process input and output streams. question returns a promise, so await waits for the answer before conversion and validation. The blank-input check runs alongside the numeric policy. finally closes the interface whether the calculation succeeds or throws.

## Try it yourself

Change the program to require a number from 1 through 10. Test 0, 11, a blank line, and 5.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
