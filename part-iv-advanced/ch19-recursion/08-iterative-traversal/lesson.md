# Iterative and recursive traversal

Before we decide that recursion is the natural answer, it is useful to solve the same problem with a loop. Our nested array has values at three levels, so a simple `for...of` loop is not enough by itself. We need a work list that remembers arrays we have not visited yet.

## Traverse with an explicit stack

```javascript
const names = ["Adam", ["Bob", ["Chet", "Dana"]], "Eve"];

function printWithStack(items) {
  const pending = [...items].reverse();

  while (pending.length > 0) {
    const item = pending.pop();

    if (Array.isArray(item)) {
      pending.push(...[...item].reverse());
    } else {
      console.log(`Loop: ${item}`);
    }
  }
}

printWithStack(names);
```

```text
Loop: Adam
Loop: Bob
Loop: Chet
Loop: Dana
Loop: Eve
```

The `pending` array is an explicit stack. When we find a nested array, we put its contents onto that stack. Reversing before `push()` preserves left-to-right output when `pop()` removes the last item.

## Traverse recursively

```javascript
function printRecursively(items) {
  for (const item of items) {
    if (Array.isArray(item)) {
      printRecursively(item);
    } else {
      console.log(`Recursive: ${item}`);
    }
  }
}

printRecursively(names);
```

```text
Recursive: Adam
Recursive: Bob
Recursive: Chet
Recursive: Dana
Recursive: Eve
```

The recursive version is shorter because the language's call stack is holding the pending work for us. Every nested array is a smaller version of the original problem, so the function can call itself with that array.

| Approach | Where pending work lives | Strength | Cost |
| --- | --- | --- | --- |
| Loop plus stack | An array we manage | Handles very deep data without call-stack growth | More bookkeeping |
| Recursion | JavaScript's call stack | Mirrors the nested shape clearly | Deep input can cause a `RangeError` |

> An explicit stack and the call stack solve the same bookkeeping problem. Recursion is not a different universe; it is a convenient way to let the language manage the stack.

---

## Try it Yourself

Change the example so both functions return a count of the leaf values instead of printing them. Test an empty array, a flat array, and an asymmetric structure with three levels. Then decide which version you would use if the nesting depth came from untrusted data.

---

## More background

This is the same distinction you will see when walking a folder tree. A recursive implementation is often the clearest first version, while an explicit stack is a useful alternative when depth or resource limits matter.

---
