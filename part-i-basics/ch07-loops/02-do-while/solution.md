## Solution

```javascript
let attempts = 0;

do {
  attempts++;
  console.log("Prompt shown");
} while (attempts < 1);

console.log(attempts);
```

```text
Prompt shown
1
```

The block runs before the condition is checked, so the prompt appears even though the loop stops immediately afterward. That guaranteed first pass is the reason to choose `do...while` here.

---
