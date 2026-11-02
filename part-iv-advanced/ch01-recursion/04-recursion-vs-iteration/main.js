function recursiveFactorial(n) {
  return n < 2 ? 1 : n * recursiveFactorial(n - 1);
}

function iterativeFactorial(n) {
  let result = 1;
  for (let value = 2; value <= n; value += 1) result *= value;
  return result;
}

console.log(`Recursive: ${recursiveFactorial(5)}`);
console.log(`Iterative: ${iterativeFactorial(5)}`);
