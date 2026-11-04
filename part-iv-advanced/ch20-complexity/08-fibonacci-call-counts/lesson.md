# Counting recursive calls

Fibonacci is a useful recursion example, but it is especially useful as a performance warning. Timing a small function can be misleading because a fast computer can finish a surprising amount of work before we notice. Counting calls gives us a clearer picture of what the algorithm actually did.

The sequence begins `0, 1, 1, 2, 3, 5, 8, 13, ...`. Its rules are `F(0) = 0`, `F(1) = 1`, and `F(n) = F(n - 1) + F(n - 2)`.

```javascript
let calls = 0;

function fibonacci(n) {
  calls += 1;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(5) = ${fibonacci(5)}`);
console.log(`Calls: ${calls}`);
```

```text
F(5) = 5
Calls: 15
```

The answer is correct, but the function was called fifteen times to calculate a value that is only five. The counter is outside the function, so every recursive call updates the same running total.

> A call counter measures how many times a function begins execution. It is not the same thing as elapsed time, but it is often a more stable way to compare two implementations of the same algorithm.

The counter accumulates. If you call `fibonacci(5)` again without resetting `calls`, the second result includes the first run. That is useful when demonstrating the behavior, but reset the counter before a fair comparison.

---

## Try it Yourself

Change the input to `6`, then `10`. Record the answer and call count. Predict what will happen for `20` before running it. Do not jump straight to `40`; the naive version grows quickly enough to make that a poor opening negotiation with your computer.

---

## More background

The next lesson translates the Fibonacci formula directly and examines the repeated work that the counter reveals.

---
