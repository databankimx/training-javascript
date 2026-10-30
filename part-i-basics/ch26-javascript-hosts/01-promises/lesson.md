# 14 · Promises, async/await, and the event loop

## Learning goal

14 · Promises, async/await, and the event loop: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We ask for a result and JavaScript hands us a promise. That sounds encouraging, although it does mean we still have to deal with the actual result arriving later.

A promise represents eventual completion or failure. async functions always return promises, and await pauses that function while allowing other work to proceed. It does not block the entire process. Synchronous statements run before promise reactions. Promise.all waits for independent operations together and rejects when one rejects; it does not cancel the remaining operations.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect start, sync, microtask, then A, B. Promise.all preserves input order, not completion order.

## Example code

```javascript
import { setTimeout as delay } from 'node:timers/promises';
console.log('start');
const pending = Promise.resolve().then(() => console.log('microtask'));
console.log('sync');
await pending;
const results = await Promise.all([delay(10,'A'), delay(5,'B')]);
console.log(results.join(', '));
```

## Expected output

```text
start
sync
microtask
A, B
```

## Walk through the example

The promise reaction is scheduled while synchronous code continues, so start and sync appear before microtask. Awaiting pending then resumes the function after that reaction. The two delays finish in a different order, but Promise.all returns their results in the same order as its input promises.

## Try it yourself

Make one operation reject and handle the failure with try/catch. Compare Promise.allSettled when you need both outcomes.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
