# Formula-based Fibonacci

There is another option: calculate Fibonacci directly with a mathematical formula. The golden ratio is `φ = (1 + √5) / 2`, and the closed-form expression is:

`F(n) = (φⁿ - (1 - φ)ⁿ) / (φ - (1 - φ))`

```javascript
const PHI = (1 + Math.sqrt(5)) / 2;

function fibonacci(n) {
  if (n < 2) return n;

  const result = (PHI ** n - (1 - PHI) ** n) / (PHI - (1 - PHI));
  return Math.round(result);
}
```

The formula does not recurse and does not build the earlier sequence. It performs a fixed collection of arithmetic operations, so its operation count is effectively `O(1)` for ordinary machine numbers.

```text
Calculated F(40) = 102334155
Function calls: 1
Time: 0.0xx ms
```

There is a catch, because there is always a catch when floating-point arithmetic starts pretending to be exact mathematics. The formula uses `number` values, and rounding error grows as `n` gets larger. `Math.round()` helps when the approximation is close to the correct integer, but it cannot restore information that floating-point arithmetic has lost.

> Check a formula-based result against an iterative or BigInt implementation before trusting it for large values. Constant time is not the same thing as unlimited precision.

---

## Try it Yourself

Compare the formula-based result with the iterative version for `n = 40`, `70`, and `100`. Find a value where the floating-point formula stops agreeing with the integer calculation, and explain why the formula's apparent `O(1)` speed does not make it the universally best choice.

---

## More background

[MDN: Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

---
