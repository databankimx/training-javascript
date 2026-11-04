# What recursion is

# What recursion is

Recursion is when a function calls itself. That sounds like the sort of idea invented during a late afternoon when everyone should have gone home, but it is useful when a problem contains smaller versions of itself.

A folder contains folders, a nested array contains nested arrays, and a tree contains smaller trees. Those are natural places for recursion. The important rule is that a recursive function must eventually stop.

## Example: counting down

```javascript
function countdown(n) {
  if (n < 0) return;
  if (n === 0) {
    console.log("Liftoff!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);
```

## Expected output

```text
3
2
1
Liftoff!
```

## Walk through the example

`countdown(3)` prints `3`, then calls `countdown(2)`. That call prints `2`, then calls `countdown(1)`. Eventually the function reaches `countdown(0)`, which prints `Liftoff!` and returns without calling itself again.

> A **base case** is the condition that resolves a recursive call without making another recursive call.
>
> The **recursive case** is the part that calls the function again. It must move the input toward the base case.

The call stack grows while the calls descend. Once the base case returns, the calls finish in reverse order. If we forget the base case, the stack eventually fills and JavaScript raises a `RangeError`.

## Try it yourself

Change the starting value to `5`, then to `-1`. Explain why the negative input produces no countdown. Finally, write a loop that produces the same output without recursion.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

Believe it or not, you have now seen the entire recursive pattern: a base case, a recursive case, and a clear path from one to the other. The rest is choosing a problem where that pattern earns its keep.

---

## Further reading

[MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

