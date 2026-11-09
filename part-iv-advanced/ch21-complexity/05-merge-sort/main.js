const values = Array.from({ length: 1000 }, (_, index) => (index * 137) % 1000);

function mergeSort(items) {
  if (items.length < 2) return items;

  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return [...result, ...left, ...right];
}

const start = performance.now();
const sorted = mergeSort(values);
const time = (performance.now() - start).toFixed(3);

console.log(`Merge sort: ${sorted.length} values, time ${time} ms`);
