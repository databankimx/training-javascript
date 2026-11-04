# Solution

```javascript
function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}

const a = makeCounter(10);
const b = makeCounter();
console.log(a(), a(), b());

let adjective = "awesome";

function describe() {
  return `JavaScript is ${adjective}`;
}

function describeWithLocalAdjective() {
  const adjective = "fantastic";
  return `JavaScript is ${adjective}`;
}

function makeDescription() {
  let modifier = "really";

  return {
    show() {
      return `JavaScript is ${modifier} useful`;
    },
    change(nextModifier) {
      modifier = nextModifier;
    }
  };
}

const description = makeDescription();
console.log(describe());
console.log(describeWithLocalAdjective());
console.log(describe());
console.log(description.show());
description.change("extremely");
console.log(description.show());

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

Expected output:

```text
11 12 1
JavaScript is awesome
JavaScript is fantastic
JavaScript is awesome
JavaScript is really useful
JavaScript is extremely useful
square 2: 4
cube 3: 27
```

The important change is the enclosing-binding example. A local `const adjective` shadows the outer binding without changing it. The methods returned by `makeDescription()` share a private `modifier` binding, so `change()` can update the value that `show()` reads later. JavaScript does not need a `nonlocal` keyword for this pattern. The closure retains access to the `let` binding created in its enclosing function.

The `square` and `cube` functions demonstrate the same rule with a different value. Each call to `generatePower()` creates a separate `exponent` binding, and the returned function keeps access to its own binding.

---
