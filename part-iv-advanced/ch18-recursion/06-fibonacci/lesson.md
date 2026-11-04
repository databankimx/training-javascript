# A small Fibonacci example

Fibonacci is a familiar sequence in which each value is the sum of the two values before it:

`0, 1, 1, 2, 3, 5, 8, 13, ...`

The definition already contains a recursive shape. `F(0)` and `F(1)` are base cases. Every later value is the sum of two smaller Fibonacci values.

```javascript
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`F(0) = ${fibonacci(0)}`);
console.log(`F(1) = ${fibonacci(1)}`);
console.log(`F(5) = ${fibonacci(5)}`);
```

```text
F(0) = 0
F(1) = 1
F(5) = 5
```

The base case handles the first two values. For `F(5)`, the recursive case asks for `F(4)` and `F(3)`, then adds their results. This is a neat illustration of recursion because the code mirrors the mathematical definition almost line for line.

There is a catch. The simple version calculates the same earlier values repeatedly, so it becomes a poor choice for larger inputs. We will measure that inefficiency, compare memoization and iteration, and discuss a formula-based alternative in Chapter 20.

> This lesson uses Fibonacci to show the recursive shape. It is not recommending the naive implementation for production work.

---

## Try it Yourself

Print `F(6)`, `F(7)`, and `F(8)`. Before you run the program, predict each value from the two values before it. Then add a base-case guard that rejects negative input with a clear message.

---

## More background

The Chapter 20 complexity lessons measure the repeated calls and compare four ways to calculate Fibonacci values.

---
