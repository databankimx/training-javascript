const memo = new Map([[0, 0], [1, 1]]);
let callCount = 0;

function fibonacci(n) {
  callCount += 1;
  if (memo.has(n)) return memo.get(n);

  const value = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, value);
  return value;
}

const n = 40;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Call count: ${callCount}`);
console.log(`Time: ${time} ms`);
