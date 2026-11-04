# Nested loops

A nested loop is a loop inside another loop. For every pass of the outer loop, the inner loop runs through all of its passes. This is useful for grids, tables, and nested arrays, where one dimension naturally contains another.

```javascript
const rows = 2;
const columns = 3;

for (let row = 1; row <= rows; row += 1) {
  for (let column = 1; column <= columns; column += 1) {
    console.log(`row ${row}, column ${column}`);
  }
}
```

> The outer loop controls the rows.
>
> The inner loop starts over for each new row and controls the columns.

```text
row 1, column 1
row 1, column 2
row 1, column 3
row 2, column 1
row 2, column 2
row 2, column 3
```

The inner loop finishes all three columns for row 1 before the outer loop advances to row 2. Nested loops multiply the work: two loops that each grow with the input can turn a task into roughly rows multiplied by columns. That may be exactly what a grid requires, but it can become expensive quickly. Before nesting loops, ask whether the data really has two dimensions or whether a single pass, a lookup, or a later array method would solve the problem more directly.

## The cost of nesting

For a small grid, the cost is trivial. For thousands of rows and thousands of columns, the inner loop may run millions of times. The point is not to fear nested loops. It is to recognize the cost and choose the structure deliberately. A data structure with two dimensions may justify the work; a data structure that only looks complicated may not.

---

## Try it Yourself

Print a 4 by 4 multiplication grid. Then use nested loops to visit every value in a nested array. Estimate how many times the inner loop runs before you try a much larger grid.

---

## More background

See [MDN: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).

---
