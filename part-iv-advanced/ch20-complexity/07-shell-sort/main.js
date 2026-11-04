const values = Array.from({ length: 1000 }, (_, index) => (index * 137) % 1000);

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

const start = performance.now();
const sorted = shellSort(values);
const time = (performance.now() - start).toFixed(3);

console.log(`Shell sort: ${sorted.length} values, time ${time} ms`);
