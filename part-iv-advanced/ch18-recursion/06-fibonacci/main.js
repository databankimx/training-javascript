function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(0) = ${fibonacci(0)}`);
console.log(`F(1) = ${fibonacci(1)}`);
console.log(`F(5) = ${fibonacci(5)}`);
