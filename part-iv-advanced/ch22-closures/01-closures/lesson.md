# Closures and captured state

A function normally uses the variables available while it runs. JavaScript also lets a function remember variables from the place where it was created. That remembered connection is a closure.

This is useful when a function needs a small private piece of state. It is also one of those ideas that sounds mystical until we trace the bindings carefully. Nothing supernatural is happening. The function simply keeps access to the environment it was born into.

```javascript
function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}

const a = makeCounter(10);
const b = makeCounter();

console.log(a(), a(), b());
```

```text
11 12 1
```

`makeCounter()` creates a local binding named `value`, then returns an arrow function that uses it. The outer call finishes, but the returned function still has access to that binding. Calling `a()` changes the `value` belonging to the first call. Calling `b()` changes a different `value` belonging to the second call.

| Name | Created by | First result | Later result |
| --- | --- | ---: | ---: |
| `a` | `makeCounter(10)` | `11` | `12` |
| `b` | `makeCounter()` | `1` | independent of `a` |

> A closure is a function together with access to the lexical environment where it was created. Closures capture bindings, not frozen snapshots. If the binding changes, later calls see the new value.

---

## Functions are values, too

JavaScript functions can be stored in variables, placed in object properties, put in arrays, and passed as arguments to other functions. A closure is still a function, so it can travel around the program in exactly the same way.

Here is a useful example: one closure raises a value to the second power, and another raises it to the third power.

```javascript
function generatePower(exponent) {
  return base => base ** exponent;
}

const square = generatePower(2);
const cube = generatePower(3);

function report(name, operation, value) {
  console.log(name + " " + value + ": " + operation(value));
}

report("square", square, 2);
report("cube", cube, 3);
```

```text
square 2: 4
cube 3: 27
```

`square` and `cube` are ordinary variables whose values happen to be functions. Each function remembers a different `exponent` binding. `report()` receives one of those functions as its `operation` parameter and calls it later. The closure does not care whether we call it directly through a variable or pass it through another function first.

The `**` operator raises a number to a power. We introduced it in the arithmetic lessons, but the closure is the new idea here: `generatePower(2)` creates a function with the exponent already remembered.

## Try it Yourself

Change `makeCounter()` so it returns an object with `increment()` and `reset()` methods. Both methods should share the same private `value` binding. Create two counters and prove that resetting one does not reset the other.

Then change `generatePower()` so it can create a fourth-power function. Store the resulting function in a variable and pass it to `report()`.

---
