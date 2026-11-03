// Use the same deterministic scrambled values for every algorithm.
const values = Array.from(
  { length: 1000 },
  (_, index) => (index * 137) % 1000
);

// Quicksort partitions around a pivot, then sorts each side recursively.
function quicksort(items) {
  if (items.length < 2) return items;

  const pivot = items.at(-1);
  const lower = items
    .slice(0, -1)
    .filter(value => value <= pivot);
  const higher = items
    .slice(0, -1)
    .filter(value => value > pivot);

  return [
    ...quicksort(lower),
    pivot,
    ...quicksort(higher)
  ];
}

// Merge sort splits the collection, then merges sorted halves.
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

// Heap sort builds a max heap, then moves the largest value to the end.
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

function siftDown(items, root, size) {
  while (true) {
    const left = root * 2 + 1;
    const right = left + 1;
    let largest = root;

    if (left < size && items[left] > items[largest]) {
      largest = left;
    }

    if (right < size && items[right] > items[largest]) {
      largest = right;
    }

    if (largest === root) return;

    [items[root], items[largest]] = [items[largest], items[root]];
    root = largest;
  }
}

// Shell sort applies insertion sort across shrinking gaps.
function shellSort(items) {
  const result = [...items];

  for (
    let gap = Math.floor(result.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let index = gap; index < result.length; index += 1) {
      const value = result[index];
      let position = index;

      while (
        position >= gap &&
        result[position - gap] > value
      ) {
        result[position] = result[position - gap];
        position -= gap;
      }

      result[position] = value;
    }
  }

  return result;
}

function measure(name, sort) {
  const start = performance.now();
  const result = sort(values);
  const time = (performance.now() - start).toFixed(3);

  console.log(`${name}: ${result.length} values, time ${time} ms`);
}

console.log("Sorting 1,000 values with the same deterministic input:");
measure("Quicksort", quicksort);
measure("Merge sort", mergeSort);
measure("Heap sort", heapSort);
measure("Shell sort", shellSort);
