# Tracing recursive calls

Recursive code is easier to understand when we stop treating it as a mysterious loop. A recursive call does not replace the current call. The current call pauses, the new call gets its own arguments and local variables, and the paused call resumes when the new call returns.

That pause is the call stack at work. Each active call is a frame on the stack. The calls go down toward the base case, then the results come back up in reverse order.

```javascript
function trace(value) {
  console.log(`enter ${value}`);

  if (value === 1) {
    console.log("return 1");
    return 1;
  }

  const result = trace(value - 1) + 1;
  console.log(`return ${result}`);
  return result;
}

trace(3);
```

```text
enter 3
enter 2
enter 1
return 1
return 2
return 3
```

## Walk through the stack

`trace(3)` prints `enter 3`, then pauses while it evaluates `trace(2)`. The same thing happens for `trace(2)`, which pauses for `trace(1)`. The call with `1` reaches the base case immediately and returns `1`.

Now the waiting calls can finish. The call that started with `2` adds one and returns `2`. Finally, the call that started with `3` adds one and returns `3`.

| Moment | Active call | What happens |
| --- | --- | --- |
| 1 | `trace(3)` | Prints `enter 3`, then calls `trace(2)` |
| 2 | `trace(2)` | Prints `enter 2`, then calls `trace(1)` |
| 3 | `trace(1)` | Prints `enter 1`, reaches the base case, returns `1` |
| 4 | `trace(2)` | Receives `1`, adds one, returns `2` |
| 5 | `trace(3)` | Receives `2`, adds one, returns `3` |

> The call stack holds the work that is waiting for a deeper call to finish. Every recursive call adds a frame, and every return removes one.

## Why tracing matters

When a recursive function produces the wrong answer, trace the input at entry and the result at return. Those two messages show whether the recursive case is making progress and whether the return value is moving back through every waiting call.

If the function never prints a return message, it probably never reached its base case. If it reaches the base case but returns the wrong result, inspect the expression that combines the recursive result with the current value.

---

## Try it Yourself

Change `trace(3)` to `trace(5)`. Then change the recursive case so that each call adds `2` instead of `1`. Predict the return messages before you run it. Finally, add a `depth` argument and indent the entry and return messages according to the depth.

---

## More background

[MDN: call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

---
