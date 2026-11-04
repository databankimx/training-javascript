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
