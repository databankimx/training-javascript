# S24 · Built-in objects and serialization limits

## Learning goal

S24 · Built-in objects and serialization limits: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We need a copy of an object. Before choosing a convenient one-liner, let’s check whether we intend to keep its dates, sets, and nested values intact.

Built-ins include Object, Array, Map, Set, Math, JSON, and structuredClone in modern hosts. structuredClone handles many nested values and circular references, but functions are not cloneable. JSON is an interchange format with a different supported-value set. Choose cloning and serialization according to data types rather than using JSON stringify/parse as a universal copy trick.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 1 2 and true true.

## Example code

```javascript
const source={created:new Date('2026-01-01T00:00:00Z'), tags:new Set(['js']), nested:{score:1}};
const copy=structuredClone(source);
copy.nested.score=2;
console.log(source.nested.score,copy.nested.score);
console.log(copy.created instanceof Date,copy.tags instanceof Set);
```

## Expected output

```text
1 2
true true
```

## Walk through the example

structuredClone creates independent nested state and retains the supported Date and Set types. Updating the clone’s score therefore leaves the original unchanged. The instanceof checks test preserved types rather than merely checking printed representations that might look similar.

## Try it yourself

Compare the types after a JSON stringify/parse round trip. Explain what information is lost.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
