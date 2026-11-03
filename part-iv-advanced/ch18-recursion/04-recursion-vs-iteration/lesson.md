# Recursion versus iteration

Recursion is not automatically the better solution. A loop can often solve the same problem with less call-stack overhead and fewer opportunities to wander into trouble.

```javascript
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
```

```text
Recursive: 120
Iterative: 120
```

Both functions calculate the same result. The recursive version mirrors the mathematical definition, while the loop keeps one function call and updates an accumulator.

> Recursion uses a new call-stack frame for each active call. A loop does not add one frame per repetition, so iteration is often safer for very deep or very large inputs.

---

## Try it Yourself

Change both functions to calculate the sum from 1 through `n`. Test `n = 0`, `n = 1`, and a larger value. Which version is easier to explain, and which one would you choose in production?
