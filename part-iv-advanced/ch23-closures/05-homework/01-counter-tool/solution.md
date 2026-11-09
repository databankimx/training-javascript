# Solution

One complete solution is:

`javascript
function makeCounter(start = 0) {
  let value = start;

  return {
    increment() {
      value += 1;
    },
    getValue() {
      return value;
    },
    reset() {
      value = start;
    }
  };
}

const counter = makeCounter(0);
counter.increment();
counter.increment();
console.log("count: " + counter.getValue());
counter.reset();
console.log("after reset: " + counter.getValue());
`

`text
count: 2
after reset: 0
`

The value binding is private because only the returned methods close over it. Calling makeCounter again creates another value binding, so separate counters do not interfere with one another.

---

