# S27 · Function composition and memoization

## Learning goal

S27 · Function composition and memoization: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Caching can save repeated work. It can also preserve the wrong answer with excellent efficiency, so we’ll spend a moment on what makes a cache key valid.

Functions can be composed, partially configured, and wrapped with caching. Memoization is correct only when equal cache keys imply equal results and dependencies do not change. A Map cache retains references and can grow without bound. Do not cache a function that depends on the current time or mutable external state without a deliberate invalidation policy.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect HELLO and 25 25 1.

## Example code

```javascript
const compose=(f,g)=>value=>f(g(value));
const trim=text=>text.trim();
const upper=text=>text.toUpperCase();
console.log(compose(upper,trim)('  hello  '));
function memoize(fn){
  const cache=new Map();
  return value=>{
    if(!cache.has(value))cache.set(value,fn(value));
    return cache.get(value);
  };
}
let calls=0;
const square=memoize(n=>{
  calls++;
  return n*n;
});
console.log(square(5),square(5),calls);
```

## Expected output

```text
HELLO
25 25 1
```

## Walk through the example

compose runs g first and passes its result to f. memoize keeps a Map inside a closure and calls the wrapped function only for a missing key. The counter confirms that two equal lookups calculate once. Extending the function’s input domain requires extending the key policy too.

## Try it yourself

Explain how a two-argument function can collide if the cache uses only its first argument. Design an appropriate key.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
