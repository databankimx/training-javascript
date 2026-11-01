# Traversing collections

Reading one item by index is useful, but real work usually means visiting every item. Rendering a search result, checking every imported record, or calculating a total all require traversal. JavaScript gives us an indexed loop when the position matters and a `for...of` loop when the value is the important part. Nested arrays need nested traversal so we visit each inner array as well.

```javascript
const names = ["Ada", "Grace", "Linus"];

for (const name of names) {
  console.log(name);
}

for (let index = 0; index < names.length; index += 1) {
  console.log(`${index}: ${names[index]}`);
}

const groups = [["Ada", "Grace"], ["Linus", "Margaret"]];
for (let row = 0; row < groups.length; row += 1) {
  for (let column = 0; column < groups[row].length; column += 1) {
    console.log(`${row},${column}: ${groups[row][column]}`);
  }
}
```

> Traversal means visiting the items in a collection in a deliberate order.
>
> `for...of` gives us each value directly.
>
> An indexed `for` loop gives us both the position and the value.
>
> A nested loop visits one level, then the next level inside it.

```text
Ada
Grace
Linus
0: Ada
1: Grace
2: Linus
0,0: Ada
0,1: Grace
1,0: Linus
1,1: Margaret
```

Use `for...of` when the position is irrelevant. Use an indexed loop when we need to update a position, compare neighbors, or report the index. For a nested collection, the inner loop runs once for each item in the current outer item.

A file system is another useful example of a tree. Folders are branches, and files are leaves. To visit every file, an algorithm can inspect a folder, visit its files, and then repeat the same work for each child folder. That is a natural use of recursion, which we will cover later. For now, the important idea is that the shape of the data determines the shape of the traversal.

The nested loops in this lesson work because we know the shape: one outer array contains rows, and each row contains values. Real data is not always so cooperative. An irregular collection might contain values and arrays at several different depths:

```javascript
const fileTree = [
  "readme.txt",
  ["images", ["logo.svg", "photo.jpg"]],
  ["scripts", ["main.js"]]
];
```

There is no single pair of loops that can visit every value in that structure. We would need to inspect each item, determine whether it is another array, and repeat the same operation whenever the nesting continues. That is the problem recursion is designed to solve. We will use this shape again when we walk a folder tree later.

---

## Try it Yourself

Print each item in a flat list, then print a nested list with its row and column. Add an empty inner array and explain what the nested loop does. Then sketch the steps for walking a folder tree and identify where the algorithm would call itself.

---

## More background

See [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [MDN: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for), and [MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion).

---
