let callCount = 0;

function fibonacci(n) {
  callCount += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 20;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Call count: ${callCount}`);
console.log(`Time: ${time} ms`);
