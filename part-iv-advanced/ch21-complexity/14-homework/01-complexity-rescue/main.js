const values = Array.from({ length: 5000 }, (_, index) => index);
values.push(1234);

function hasDuplicateSlow(items) {
  for (let left = 0; left < items.length; left += 1) {
    for (let right = left + 1; right < items.length; right += 1) {
      if (items[left] === items[right]) return true;
    }
  }
  return false;
}

function hasDuplicateFast(items) {
  const seen = new Set();

  for (const item of items) {
    if (seen.has(item)) return true;
    seen.add(item);
  }

  return false;
}

const slowStart = performance.now();
const slowResult = hasDuplicateSlow(values);
const slowTime = (performance.now() - slowStart).toFixed(3);

const fastStart = performance.now();
const fastResult = hasDuplicateFast(values);
const fastTime = (performance.now() - fastStart).toFixed(3);

console.log(`Duplicates: ${slowResult}`);
console.log(`Slow time: ${slowTime} ms`);
console.log(`Fast duplicates: ${fastResult}`);
console.log(`Fast time: ${fastTime} ms`);
