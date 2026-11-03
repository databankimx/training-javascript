function makeSquareCache() {
  const cache = new Map();

  return function square(value) {
    if (!cache.has(value)) {
      console.log("calculated: " + (value * value));
      cache.set(value, value * value);
    } else {
      console.log("cached: " + cache.get(value));
    }

    return cache.get(value);
  };
}

const square = makeSquareCache();
square(3);
square(3);
