const values = Array.from({ length: 1000 }, (_, index) => (index * 137) % 1000);

function siftDown(items, root, size) {
  while (true) {
    const left = root * 2 + 1;
    const right = left + 1;
    let largest = root;

    if (left < size && items[left] > items[largest]) largest = left;
    if (right < size && items[right] > items[largest]) largest = right;
    if (largest === root) return;

    [items[root], items[largest]] = [items[largest], items[root]];
    root = largest;
  }
}

function heapSort(items) {
  const result = [...items];

  for (let index = Math.floor(result.length / 2) - 1; index >= 0; index -= 1) {
    siftDown(result, index, result.length);
  }

  for (let end = result.length - 1; end > 0; end -= 1) {
    [result[0], result[end]] = [result[end], result[0]];
    siftDown(result, 0, end);
  }

  return result;
}

const start = performance.now();
const sorted = heapSort(values);
const time = (performance.now() - start).toFixed(3);

console.log(`Heap sort: ${sorted.length} values, time ${time} ms`);
