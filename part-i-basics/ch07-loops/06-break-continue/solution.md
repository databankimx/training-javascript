## Solution

```javascript
// continue: skip one iteration
for (let number = 1; number <= 5; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
}
```

```text
1
2
4
5
```

The first loop skips 3 and continues to the next pass.

```javascript
// break: stop the loop completely
for (let number = 1; number <= 10; number += 1) {
  if (number === 5) {
    console.log("Found 5");
    break;
  }
  console.log(number);
}
```

```text
1
2
Found 5
```

The second loop ends when it reaches 5. One statement skips an item, while the other ends the search.

---
