let functionCalls = 0;

function fibonacci(n) {
  functionCalls += 1;
  let previous = 0;
  let current = 1;

  for (let index = 0; index < n; index += 1) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}

const n = 40;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Function calls: ${functionCalls}`);
console.log(`Time: ${time} ms`);
