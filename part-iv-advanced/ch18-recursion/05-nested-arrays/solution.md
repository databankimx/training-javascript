# Solution

The function can accumulate a count while it visits each branch:

```javascript
function countLeaves(items) {
  let count = 0;
  for (const item of items) {
    count += Array.isArray(item) ? countLeaves(item) : 1;
  }
  return count;
}

console.log(countLeaves(["Adam", ["Bob", ["Chet", "Dana"]], "Eve"]));
```

```text
5
```

The recursive call returns the number of leaves in a nested branch, and the caller adds that result to its own count.
