# Comparing Fibonacci algorithms

We have now calculated the same mathematical sequence four ways. The answer is not simply that recursion is good or bad. The implementation determines how much work is repeated, how much memory is used, and whether the numerical result can be trusted at the requested size.

| Algorithm | Time | Extra space | Main concern |
| --- | --- | --- | --- |
| Naive recursive | Exponential | Call stack | Recalculates the same values many times |
| Memoized recursive | `O(n)` | `O(n)` | Keeps a cache and recursive frames |
| Iterative, two values | `O(n)` | `O(1)` | Less visually similar to the formula |
| Formula-based | Effectively `O(1)` for machine numbers | `O(1)` | Floating-point rounding can make large answers wrong |

```javascript
const choices = [
  "naive recursive",
  "memoized recursive",
  "iterative",
  "formula-based"
];

console.log(choices.join(", "));
```

The call counts tell the story for `F(40)`: the naive version takes hundreds of millions of recursive calls, the memoized version takes a few dozen, and the iterative and formula-based versions call their function once because their work happens inside that one call.

```text
Naive recursive: repeated work, exponential time
Memoized recursive: linear time, linear extra space
Iterative: linear time, constant extra space
Formula-based: constant arithmetic work, floating-point limitation
```

The formula is not automatically the winner. A result that arrives instantly but is numerically wrong is not a performance success. Likewise, memoization is not free if the cache consumes more memory than the application can spare.

> Algorithm choice is a trade-off. Compare the shape of the work, memory use, data size, and correctness requirements before choosing the shortest-looking implementation.

---

## Try it Yourself

Choose a Fibonacci implementation for each situation:

- explaining the mathematical definition to a student,
- computing `F(40)` repeatedly during one program run,
- computing a very large exact value, and
- computing only one small value in a user-interface example.

Defend each choice using time, space, and precision rather than personal preference.

---

## More background

The next lessons return to tracing and traversing structures. Fibonacci was our performance laboratory, not the only useful recursive problem.

---
