# Iterative Fibonacci

Do we have to use recursion? No. For every recursive algorithm, there is an equivalent iterative approach, although some require an explicit stack. Fibonacci is a friendly case because a loop needs only the previous two values.

```javascript
function fibonacci(n) {
  let previous = 0;
  let current = 1;

  for (let index = 0; index < n; index += 1) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}
```

The destructuring assignment updates both values at once. After each loop, `previous` is the next Fibonacci value and `current` is the value after it.

```text
Calculated F(40) = 102334155
Function calls: 1
Time: 0.0xx ms
```

The function itself is called once. Its loop does the work, so there are no recursive call frames and no risk of a recursion-depth error. The time is `O(n)`, and this two-variable version uses `O(1)` additional space.

An array-based loop is also possible, but it keeps every earlier value. That is `O(n)` space, while the two-variable version keeps only the values needed for the next step.

---

## Try it Yourself

Write the array-based version, then compare its memory needs with the two-variable version. Test `n = 0`, `n = 1`, and `n = 40`. Explain why the iterative version's call count is one even though the loop repeats.

---

## More background

The next lesson uses a direct mathematical formula, with an important warning about floating-point rounding.

---
