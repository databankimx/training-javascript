# Function composition and pipelines

Functional code often starts with small functions that each do one job. The next question is how to connect those jobs without turning the main program into a knot of temporary variables.

```javascript
const compose = (first, second) => value => first(second(value));
const trim = text => text.trim();
const upper = text => text.toUpperCase();

const cleanGreeting = compose(upper, trim);
console.log(cleanGreeting("  hello  "));
```

```text
HELLO
```

`trim` removes whitespace and returns a new string. `upper` receives a string and returns its uppercase form. `compose` accepts two functions and returns a new function. When that returned function is called, it sends the value through `second` first and then sends the result through `first`.

That order is worth tracing carefully. `cleanGreeting("  hello  ")` calls `trim` first, producing `"hello"`. It then passes that result to `upper`, producing `"HELLO"`. The name `compose(upper, trim)` reads from the outside in, while the data flows from the right-hand function to the left-hand function.

> Function composition means building a new function by connecting existing functions. Each function receives the previous function's result and returns the next value in the pipeline.

## Composition versus a pipeline helper

For three or four functions, nested composition can become difficult to read. A pipeline helper usually applies functions from left to right:

```javascript
const pipe = (...functions) => value =>
  functions.reduce((current, fn) => fn(current), value);

const cleanGreeting = pipe(trim, upper);
console.log(cleanGreeting("  hello  "));
```

The two examples produce the same result. `compose` is often written right to left because of its mathematical tradition. `pipe` follows the order most people read a set of instructions. Neither one is automatically more correct. The useful choice is the one that makes the data flow obvious to the next person who has to maintain it.

## Try it Yourself

Add a `punctuate` function that adds an exclamation mark. Use both `compose` and `pipe` to produce `HELLO!`. Then change the input to include several spaces before and after the word and explain why the output does not gain extra spaces.

---
