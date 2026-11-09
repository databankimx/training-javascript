# Recursive factorial

Factorial is a useful example because its definition already contains a smaller version of itself:

`n! = n × (n - 1)!`, with `0! = 1`.

```javascript
function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) {
    throw new RangeError("Use an integer from 0 to 18.");
  }
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(`5! = ${factorial(5)}`);
console.log(`0! = ${factorial(0)}`);
```

```text
5! = 120
0! = 1
```

The first `if` rejects values that would make the example unsafe or inaccurate. The second `if` is the base case. Otherwise, the function multiplies `n` by a smaller factorial.

For `factorial(3)`, the calls descend as `3 → 2 → 1`. The results then return as `1 → 2 → 6`. The multiplication waits for the smaller call to finish, which is the part beginners usually miss when reading recursive code.

This is a good teaching example, but it is not a good general-purpose algorithm for large factorials. Every recursive call consumes stack space, and JavaScript's ordinary `number` type cannot represent arbitrarily large integers exactly. For larger values, an iterative approach with `BigInt` is usually a better design.

> We limit the example to `18` because `18!` still fits within JavaScript's safe integer range. The limit is not a mathematical rule. It is a guardrail for this particular implementation.

---

## Try it Yourself

Add a loop that prints factorials from 0 through 10. Then remove the upper limit and test a large value. What does the result tell you about JavaScript's ordinary `number` type?
