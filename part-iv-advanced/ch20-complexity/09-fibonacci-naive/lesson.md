# Naive Fibonacci

Because the Fibonacci formula is already recursive, we can translate it directly into JavaScript.

```javascript
let callCount = 0;

function fibonacci(n) {
  callCount += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

The two base cases return immediately. Every larger value creates two more calls. That is faithful to the definition, but faithful is not the same thing as efficient.

```javascript
const n = 20;
const start = performance.now();
const result = fibonacci(n);
const time = (performance.now() - start).toFixed(3);

console.log(`Calculated F(${n}) = ${result}`);
console.log(`Call count: ${callCount}`);
console.log(`Time: ${time} ms`);
```

```text
Calculated F(20) = 6765
Call count: 21891
Time: 0.0xx ms
```

For `F(5)`, the function calculates `F(3)` twice and `F(2)` three times. For larger values, the repeated work becomes severe. The naive call count grows exponentially, roughly in proportion to `1.618^n`.

The time shown here will vary by machine. The call count is the more useful evidence because it does not depend on background processes, clock precision, or whether your computer is having a thoughtful day.

> Do not use the naive recursive algorithm for large values. It is a teaching example for recognizing repeated work, not a production recommendation.

---

## Try it Yourself

Change `n` to `25`, then `30`. Record the call counts and elapsed times. Draw the first few calls for `F(5)` and mark the repeated values. Explain why the same correct formula becomes a poor algorithm.

---

## More background

The next lesson stores computed results so the same Fibonacci value is not recalculated.

---
