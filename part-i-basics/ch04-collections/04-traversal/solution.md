# Exercise solution

Here is a deliberately indexed solution because the exercise asks us to report both row and column positions.

```javascript
const rows = [["Ada", "Grace"], ["Linus", "Margaret"]];

for (let row = 0; row < rows.length; row += 1) {
  for (let column = 0; column < rows[row].length; column += 1) {
    console.log(`${row},${column}: ${rows[row][column]}`);
  }
}
```

```text
0,0: Ada
0,1: Grace
1,0: Linus
1,1: Margaret
```

The outer loop chooses an inner array, and the inner loop visits that row’s values. An empty row would simply make the inner loop run zero times. That is one of the quiet advantages of a loop whose boundary comes from the current row: it adapts to rows of different lengths.

---
