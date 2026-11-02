const values = [3, 8, 12, 19, 24, 31, 42, 57, 63];

function linearSearch(items, target) {
  for (let index = 0; index < items.length; index += 1) {
    if (items[index] === target) return index;
  }
  return -1;
}

function binarySearch(items, target) {
  let low = 0;
  let high = items.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (items[middle] === target) return middle;
    if (items[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

console.log(`Linear index: ${linearSearch(values, 57)}`);
console.log(`Binary index: ${binarySearch(values, 57)}`);
