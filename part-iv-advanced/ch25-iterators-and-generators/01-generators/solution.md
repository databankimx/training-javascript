# Solution

```javascript
function* range(start, end) {
  for (let value = start; value < end; value += 1) {
    yield value;
  }
}

function* squares(values) {
  for (const value of values) {
    yield value * value;
  }
}

console.log([...squares(range(1, 5))].join(","));

const iterator = range(10, 12);
const first = iterator.next();
const second = iterator.next();
const finished = iterator.next();

console.log("value: " + first.value + ", done: " + first.done);
console.log("value: " + second.value + ", done: " + second.done);
console.log("value: " + finished.value + ", done: " + finished.done);
```

```text
1,4,9,16
value: 10, done: false
value: 11, done: false
value: undefined, done: true
```

The generator pauses at each `yield`, so the caller controls how far the sequence advances. The spread expression consumes the bounded square sequence completely, while the explicit calls make the iterator protocol visible.

---
