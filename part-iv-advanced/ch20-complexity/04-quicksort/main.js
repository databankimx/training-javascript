const values = Array.from({ length: 1000 }, (_, index) => (index * 137) % 1000);

function quicksort(items) {
  if (items.length < 2) return items;

  const pivot = items.at(-1);
  const lower = items.slice(0, -1).filter(value => value <= pivot);
  const higher = items.slice(0, -1).filter(value => value > pivot);

  return [...quicksort(lower), pivot, ...quicksort(higher)];
}

const start = performance.now();
const sorted = quicksort(values);
const time = (performance.now() - start).toFixed(3);

console.log(`Quicksort: ${sorted.length} values, time ${time} ms`);
