let calls = 0;

function fibonacci(n) {
  calls += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(5) = ${fibonacci(5)}`);
console.log(`Calls: ${calls}`);
