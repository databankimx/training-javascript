# S05 · Bitwise flags

## Learning goal

S05 · Bitwise flags: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

One integer can hold several independent flags. This is useful, although I’d still like names for those flags rather than a collection of mysterious numbers.

Number bitwise operators coerce values to 32-bit integers. Use individual bits as independent flags: OR sets, AND tests, XOR toggles, and AND with a complemented mask clears. Shifts on Number do not implement arbitrary-size integer arithmetic. BigInt has separate integer operators when more bits are needed.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect true, false, and 1.

## Example code

```javascript
const READ = 1 << 0, WRITE = 1 << 1, EXECUTE = 1 << 2;
let permissions = READ | WRITE;
console.log(Boolean(permissions & READ));
console.log(Boolean(permissions & EXECUTE));
permissions &= ~WRITE;
console.log(permissions);
```

## Expected output

```text
true
false
```

## Walk through the example

Each named constant selects a different bit. OR combines READ and WRITE. AND with a flag produces a nonzero result when that flag is present, and Boolean gives a readable true/false result. AND with the complemented WRITE mask clears only that bit.

## Try it yourself

Toggle EXECUTE twice and show that the original flags are restored. Explain why XOR is suitable.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
