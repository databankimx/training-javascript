## Solution

```javascript
const rows = 2;
const columns = 3;

for (let row = 1; row <= rows; row += 1) {
  for (let column = 1; column <= columns; column += 1) {
    console.log(`row ${row}, column ${column}`);
  }
}
```

```text
row 1, column 1
row 1, column 2
row 1, column 3
row 2, column 1
row 2, column 2
row 2, column 3
```

The inner loop completes all columns for each row before the outer loop advances. The nested structure is appropriate because the data has rows and columns, but its cost grows with both dimensions. That is why we should confirm that the data really needs two passes before using nested loops on a large input.

---
