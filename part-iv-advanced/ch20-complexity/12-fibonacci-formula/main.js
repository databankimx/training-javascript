const PHI = (1 + Math.sqrt(5)) / 2;
let functionCalls = 0;

function fibonacci(n) {
  functionCalls += 1;
  if (n < 2) return n;

  const result = (PHI ** n - (1 - PHI) ** n) / (PHI - (1 - PHI));
  return Math.round(result);
}

const n = 40;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Function calls: ${functionCalls}`);
console.log(`Time: ${time} ms`);
