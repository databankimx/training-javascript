# Solution

Both versions visit the same leaves. The loop uses an explicit stack, while the recursive version lets JavaScript maintain the pending calls.

```javascript
const names = ["Adam", ["Bob", ["Chet", "Dana"]], "Eve"];

function countWithStack(items) {
  const pending = [...items].reverse();
  let count = 0;

  while (pending.length > 0) {
    const item = pending.pop();
    if (Array.isArray(item)) {
      pending.push(...[...item].reverse());
    } else {
      count += 1;
    }
  }

  return count;
}

function countRecursively(items) {
  let count = 0;

  for (const item of items) {
    count += Array.isArray(item) ? countRecursively(item) : 1;
  }

  return count;
}

console.log(`Loop count: ${countWithStack(names)}`);
console.log(`Recursive count: ${countRecursively(names)}`);
```

```text
Loop count: 5
Recursive count: 5
```

The results agree because both functions visit every leaf exactly once. The explicit stack is a useful escape hatch when the input may be too deep for the call stack.

---
