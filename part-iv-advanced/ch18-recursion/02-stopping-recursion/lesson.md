# Base cases and progress

The first lesson showed the shape of recursion. Now we will make the rules explicit. A recursive function needs a base case, and every recursive call must make measurable progress toward it.

```javascript
function countdown(n) {
  if (n < 0) {
    console.log("Cannot count down from a negative number.");
    return false;
  }
  if (n === 0) {
    console.log("Liftoff!");
    return true;
  }
  console.log(n);
  return countdown(n - 1);
}

console.log(`Completed: ${countdown(3)}`);
```

```text
3
2
1
Liftoff!
Completed: true
```

The negative input is an error case, and zero is the successful base case. Positive values recurse with `n - 1`, so the input cannot wander away from zero unless we change the code to make that happen.

> A recursive algorithm is unsafe when a call can repeat without getting closer to a base case. Eventually the call stack fills and JavaScript throws a `RangeError`.

---

## Try it Yourself

Change the function to count upward from zero to a limit. Decide which condition should stop it, and test a negative limit as an edge case.

Recursion is not a magic badge that makes an algorithm sophisticated. It is a tool. If a loop says the same thing more clearly, use the loop and keep the drama for something that deserves it.
