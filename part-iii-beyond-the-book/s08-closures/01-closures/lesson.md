# S08 · Closures and captured state

## Learning goal

S08 · Closures and captured state: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The outer function has finished, yet the inner function still remembers its variables. This is intentional. For once, the thing hanging around after a function returns is useful.

A closure is a function together with access to its lexical environment. The environment survives after the outer function returns. Closures capture bindings, not frozen snapshots. Factory calls create independent environments, which makes closures useful for private state and configuration. Avoid accidentally sharing one outer mutable variable among unrelated callbacks.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 11 12 1. a and b close over different value bindings.

## Example code

```javascript
function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}
const a = makeCounter(10);
const b = makeCounter();
console.log(a(), a(), b());
```

## Expected output

```text
11 12 1
```

## Walk through the example

makeCounter creates a new value binding each time it is called. The returned arrow increments that binding later. a is invoked twice within the same log, while b is invoked once from a different environment. Trace the bindings rather than assuming all counters share the same start value.

## Try it yourself

Return an object with increment and reset functions that share the same private value.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
