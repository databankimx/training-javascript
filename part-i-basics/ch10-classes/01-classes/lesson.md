# 11 · Classes, prototypes, and private state

## Learning goal

11 · Classes, prototypes, and private state: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Sometimes we need an object that owns a little state and controls how that state changes. A class can help. We don’t need to appoint one manager object to supervise the entire universe.

JavaScript objects delegate property lookup through prototypes. Class syntax defines a constructor and methods on a prototype. Each instance has its own fields. A #private field enforces access through the class, which is stronger than a naming convention. Use classes when a concept needs identity and controlled state; plain objects and functions are often enough for simple transformations.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 1 0 and true. The two counters share methods but keep separate state.

## Example code

```javascript
class Counter {
  #value = 0;
  increment() {
    this.#value++;
  }
  get value() {
    return this.#value;
  }
}
const first = new Counter();
const second = new Counter();
first.increment();
console.log(first.value, second.value);
console.log(Object.getPrototypeOf(first) === Counter.prototype);
```

## Expected output

```text
1 0
true
```

## Walk through the example

Each new Counter receives its own private value field. increment changes only the first instance. Reading the getters therefore gives 1 and 0. The prototype comparison demonstrates that the first instance delegates to Counter.prototype rather than receiving a separate copy of every method.

## Try it yourself

Add a decrement method that never takes the counter below zero. Try it on a fresh instance and after two increments.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
