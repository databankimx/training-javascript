const values = Array.from({ length: 20 }, (_, index) => index + 1);
const shuffled = [...values];
for (let index = shuffled.length - 1; index > 0; index -= 1) {
  const swapIndex = Math.floor(Math.random() * (index + 1));
  [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
}

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

function measure(name, items, search) {
  let steps = 0;
  const start = performance.now();
  const index = search(items, 17, () => { steps += 1; });
  const elapsed = (performance.now() - start).toFixed(3);
  console.log(`${name}: index ${index}, steps ${steps}, time ${elapsed} ms`);
}

console.log(`Linear data: ${shuffled.join(", ")}`);
console.log("Linear target: 17");
measure("Linear search", shuffled, linearSearch);
console.log("");
console.log(`Sorted data: ${values.join(", ")}`);
console.log("Binary target: 17");
measure("Binary search", values, binarySearch);
