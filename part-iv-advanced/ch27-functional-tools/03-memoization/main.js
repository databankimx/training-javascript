function memoize(fn) {
  const cache = new Map();

  return value => {
    if (!cache.has(value)) {
      cache.set(value, fn(value));
    }

    return cache.get(value);
  };
}

let calls = 0;
const square = memoize(value => {
  calls += 1;
  return value * value;
});

console.log(square(5));
console.log(square(5));
console.log("calls: " + calls);
