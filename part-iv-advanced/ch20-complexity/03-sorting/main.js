const values = Array.from({ length: 1000 }, (_, index) => (index * 137) % 1000);

function selectionSort(items) {
  const result = [...items];
  const stats = { comparisons: 0, swaps: 0 };
  for (let start = 0; start < result.length - 1; start += 1) {
    let smallest = start;
    for (let index = start + 1; index < result.length; index += 1) {
      stats.comparisons += 1;
      if (result[index] < result[smallest]) smallest = index;
    }
    [result[start], result[smallest]] = [result[smallest], result[start]];
    stats.swaps += 1;
  }
  return { result, stats };
}

function bubbleSort(items) {
  const result = [...items];
  const stats = { comparisons: 0, swaps: 0 };
  for (let end = result.length - 1; end > 0; end -= 1) {
    for (let index = 0; index < end; index += 1) {
      stats.comparisons += 1;
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
        stats.swaps += 1;
      }
    }
  }
  return { result, stats };
}

function insertionSort(items) {
  const result = [];
  const stats = { comparisons: 0, swaps: 0 };
  for (const value of items) {
    let index = result.length;
    while (index > 0) {
      stats.comparisons += 1;
      if (result[index - 1] <= value) break;
      index -= 1;
    }
    result.splice(index, 0, value);
  }
  return { result, stats };
}

function measure(name, sort) {
  const start = performance.now();
  const { result, stats } = sort(values);
  const time = (performance.now() - start).toFixed(3);
  console.log(`${name}: ${result.length} values, comparisons ${stats.comparisons}, swaps ${stats.swaps}, time ${time} ms`);
}

console.log("Sorting 1,000 values with the same deterministic input:");
measure("Selection sort", selectionSort);
measure("Bubble sort", bubbleSort);
measure("Insertion sort", insertionSort);
