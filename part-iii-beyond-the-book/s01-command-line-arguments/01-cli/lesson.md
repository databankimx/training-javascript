# S01 · Command-line arguments

## Learning goal

S01 · Command-line arguments: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A command-line argument is input from outside the program. It deserves the same attention as a form field, even if it arrived looking rather technical.

process.argv contains the Node executable, the script path, and then user arguments. Parse flags explicitly and produce useful usage errors. Never interpolate untrusted arguments into shell commands. The browser runner supplies no CLI arguments; run the terminal command shown below to practice the real interface.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Runner: Hello, learner and Arguments: 0. Terminal: node main.js Ada prints Hello, Ada and Arguments: 1.

## Example code

```javascript
const args = process.argv.slice(2);
const name = args[0] ?? 'learner';
console.log('Hello, ' + name);
console.log('Arguments:', args.length);
```

## Expected output

```text
Hello, learner
Arguments: 0
```

## Walk through the example

slice(2) removes the executable and script positions from argv. The first remaining token becomes name, or the nullish fallback supplies learner. The second log reports the argument count. The runner does not fabricate command-line tokens, so use a terminal for the flagged version of this exercise.

## Try it yourself

Implement --name Ada and reject unknown options. Show usage for --help.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
