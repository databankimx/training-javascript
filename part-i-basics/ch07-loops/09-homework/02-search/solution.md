## Solution

```javascript
const names = ["Ada", "Grace", "Linus", "James"];
const target = "Linus";
let foundIndex = -1;

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === target) {
    foundIndex = index;
    break;
  }
}

console.log(`Found at index: ${foundIndex}`);
```

```text
Found at index: 2
```

`foundIndex` starts at `-1`, the conventional not-found value. The loop records the first match and `break` avoids unnecessary later checks. That default gives the caller a clear “not found” result without needing a second search.

---
