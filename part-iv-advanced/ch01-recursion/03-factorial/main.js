function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) {
    throw new RangeError("Use an integer from 0 to 18.");
  }
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(`5! = ${factorial(5)}`);
console.log(`0! = ${factorial(0)}`);
