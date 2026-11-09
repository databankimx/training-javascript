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
