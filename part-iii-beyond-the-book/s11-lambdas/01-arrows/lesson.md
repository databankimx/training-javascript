# S11 · Arrow functions and higher-order behavior

## Learning goal

S11 · Arrow functions and higher-order behavior: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Arrow functions remove a little ceremony. They also change a few important details, so we should resist assuming that shorter means interchangeable.

Arrow functions are concise function expressions, not a separate functional-programming system. An expression body returns implicitly; a block body requires return. To return an object literal directly, wrap it in parentheses. Higher-order functions accept functions or return them, allowing policy to be passed independently of iteration.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect [2,4,6] and a record with id 1 and active true.

## Example code

```javascript
const items = [1,2,3];
const doubled = items.map(n => n * 2);
const records = items.map(id => ({id, active:true}));
console.log(doubled);
console.log(records[0]);
```

## Expected output

```text
Expect [2,4,6] and a record with id 1 and active true.
```

## Walk through the example

The first map returns a numeric expression directly. The second returns an object literal enclosed in parentheses. Replacing an expression body with braces changes the meaning of the body, so it also creates the responsibility to write return explicitly.

## Try it yourself

Rewrite the doubling callback with a block body. Intentionally omit return, observe the result, and repair it.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
