# 12 · Files, JSON, and error handling

## Learning goal

12 · Files, JSON, and error handling: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Saving a file is easy. Reading it back tomorrow, when it is missing or contains something unexpected, is where the conversation gets more interesting.

Node filesystem promises support await. JSON stores structured data but cannot represent every JavaScript value: undefined, functions, circular references, and BigInt need special handling or cannot be serialized directly. A filesystem error and invalid JSON are different failure modes. Catch an error where you can take useful action, and preserve failures you cannot handle. The runner copies lessons to a scratch directory; generated files appear there while the run is retained.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect hello. Run from a terminal to keep generated files in the lesson directory; runner output is temporary.

## Example code

```javascript
import { readFile, writeFile } from 'node:fs/promises';
const filename = new URL('./progress.json', import.meta.url);
await writeFile(filename, JSON.stringify({ completed: ['hello'] }, null, 2));
try {
  const progress = JSON.parse(await readFile(filename, 'utf8'));
  console.log(progress.completed.join(', '));
}catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
```

## Expected output

```text
hello
```

## Walk through the example

The file URL resolves progress.json beside main.js rather than depending on the terminal’s current folder. writeFile stores a JSON representation, readFile retrieves text, and JSON.parse reconstructs the record. Parsing can succeed even when the application schema is wrong, which is why the exercise adds a separate validation step.

## Try it yourself

Validate that completed is an array of strings after parsing. Explain why valid JSON is not enough.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
