## Solution

```javascript
const counts = new Map();
for (const word of "red blue red green blue red".split(" ")) {
  counts.set(word, (counts.get(word) ?? 0) + 1);
}

const unique = new Set(counts.keys());
console.log(counts.get("red"));
console.log([...unique]);
```

The map stores a running count for each word. The set gives us the unique keys without a second manual deduplication loop.

```text
3
[ 'red', 'blue', 'green' ]
```

---
