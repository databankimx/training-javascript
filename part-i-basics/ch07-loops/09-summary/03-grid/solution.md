## Solution

```javascript
const rows = 3;
const columns = 4;

for (let row = 0; row < rows; row += 1) {
  let line = "";
  for (let column = 0; column < columns; column += 1) {
    line += "* ";
  }
  console.log(line.trim());
}
```

```text
* * * *
* * * *
* * * *
```

The inner loop builds one row. The outer loop repeats that work for each row.

---
