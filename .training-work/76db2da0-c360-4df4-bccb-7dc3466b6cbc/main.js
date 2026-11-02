const values = [3, 8, 12, 19, 24, 31, 42, 57, 63];

function linearSearch(items, target, count = () => {}) {
  for (let index = 0; index < items.length; index += 1) {
    count();
    if (items[index] === target) return index;
  }
  return -1;
}

function binarySearch(items, target, count = () => {}) {
  let low = 0;
  let high = items.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    count();
    if (items[middle] === target) return middle;
    if (items[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

function measure(name, search) {
  let steps = 0;
  const start = performance.now();
  const index = search(values, 57, () => { steps += 1; });
  const elapsed = (performance.now() - start).toFixed(3);
  console.log(`${name}: index ${index}, steps ${steps}, time ${elapsed} ms`);
}

measure("Linear search", linearSearch);
measure("Binary search", binarySearch);
