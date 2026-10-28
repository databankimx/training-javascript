# Nested arrays - exercise solution

```javascript
const rows = [
  ["Ada", "Grace"],
  ["Linus", "Margaret"],
  ["Katherine"]
];

for (const row of rows) {
  for (const name of row) {
    console.log(name);
  }
}

const copy = rows.map(row => [...row]);
copy[0].push("Alan");
console.log(rows[0].length);
console.log(copy[0].length);
```

```text
Ada
Grace
Linus
Margaret
Katherine
2
3
```

The nested `for...of` loops visit each inner array and then each value. `map()` creates a new outer array, while the inner spread creates a new copy for every row, so changing the copy does not change the original.

---
