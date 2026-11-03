function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memo = new Map([[0, 0], [1, 1]]);
function fibonacciMemoized(n) {
  if (memo.has(n)) return memo.get(n);
  const value = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
  memo.set(n, value);
  return value;
}

console.log(`Naive F(10): ${fibonacci(10)}`);
console.log(`Memoized F(10): ${fibonacciMemoized(10)}`);
