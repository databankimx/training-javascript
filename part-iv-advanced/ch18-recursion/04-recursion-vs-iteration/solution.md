# Solution

Both approaches can calculate a running sum:

```javascript
function recursiveSum(n) {
  return n <= 0 ? 0 : n + recursiveSum(n - 1);
}

function iterativeSum(n) {
  let total = 0;
  for (let value = 1; value <= n; value += 1) total += value;
  return total;
}

console.log(`Recursive: ${recursiveSum(5)}`);
console.log(`Iterative: ${iterativeSum(5)}`);
```

```text
Recursive: 15
Iterative: 15
```

The recursive base case handles zero and negative values. The iterative version avoids growing the call stack.
