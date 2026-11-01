## Solution

```javascript
function parseScore(text) {
  const score = Number(text);
  return Number.isNaN(score) ? "Invalid number" : score;
}

console.log(parseScore("12"));
console.log(parseScore("twelve"));
```

```text
12
Invalid number
```

The function converts valid text and returns a clear failure result for text that is not numeric.

---
