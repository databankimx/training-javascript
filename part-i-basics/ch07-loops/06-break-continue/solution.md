## Solution

```javascript
for (let number = 1; number <= 10; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
  if (number === 5) {
    console.log("Found 5");
    break;
  }
}
```

```text
1
2
4
5
Found 5
```

`continue` skips 3, and `break` ends the loop after 5.

---
