function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) throw new RangeError('Use an integer from 0 to 18');
  return n < 2 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));
