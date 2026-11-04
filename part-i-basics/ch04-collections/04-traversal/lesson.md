# Traversing collections

Reading one item by index is useful, but real work usually means visiting every item. Rendering a search result, checking every imported record, or calculating a total all require traversal. JavaScript gives us several ways to walk a collection, and each one answers a slightly different question.

Python's simple `for` loop is closest to JavaScript's `for...of` loop. C# developers will recognize the same idea from `foreach`. The loop gives us one value at a time, so the code can focus on the work rather than on bookkeeping.

```javascript
const names = ["Ada", "Grace", "Linus"];

console.log("Simple loop:");
for (const name of names) {
  console.log(`${name} is on the list.`);
}
console.log("The loop is complete.");
```

```text
Simple loop:
Ada is on the list.
Grace is on the list.
Linus is on the list.
The loop is complete.
```

The statements inside the braces run once per item. The last `console.log()` is outside the loop, so it runs once after the loop finishes. That distinction is easy to lose when a block is only two lines long, and it is exactly the sort of mistake that produces output that is technically valid and completely unhelpful.

---

## Getting the position as well as the value

Sometimes the position matters. We might need to update one item, compare neighboring items, or print a row number. The traditional indexed `for` loop gives us the position explicitly:

```javascript
console.log("Indexed loop:");
for (let index = 0; index < names.length; index += 1) {
  console.log(`Index ${index}: ${names[index]}`);
}
```

```text
Indexed loop:
Index 0: Ada
Index 1: Grace
Index 2: Linus
```

The loop starts at zero, continues while `index < names.length`, and increases the index after each iteration. The less-than sign matters because the last valid index is one less than the length.

JavaScript also gives us `entries()`, which is a convenient middle ground. It produces an iterable of index-and-value pairs, so we can stay with `for...of` without looking the value up a second time:

```javascript
console.log("entries() loop:");
for (const [index, name] of names.entries()) {
  console.log(`Index ${index}: ${name}`);
}
```

```text
entries() loop:
Index 0: Ada
Index 1: Grace
Index 2: Linus
```

> An iterable is a value that can provide items one at a time to a loop. Arrays are iterable, and `entries()` gives us an iterable of pairs.
>
> Destructuring lets `const [index, name]` unpack each pair into two named bindings.

This is the JavaScript equivalent of Python's `enumerate()`. The syntax differs, but the reason for using it is the same: the code needs both the position and the value.

---

## Walking two collections together

A second common pattern is comparing two arrays position by position. JavaScript does not have a built-in `zip()` function in the same everyday style as Python, so an indexed loop is often the clearest option:

```javascript
const letters = ["A", "B", "C", "D"];
const numbers = [10, 20, 30];

console.log("Parallel arrays:");
for (let index = 0; index < Math.min(letters.length, numbers.length); index += 1) {
  console.log(`${letters[index]}: ${numbers[index]}`);
}
console.log(`Unpaired values: ${letters.length - numbers.length}`);
```

```text
Parallel arrays:
A: 10
B: 20
C: 30
Unpaired values: 1
```

The shorter array determines how many pairs are safe to read. If the arrays are supposed to be the same length, that difference should be treated as a data problem rather than quietly ignored. A loop that pairs records with the wrong partner is a very efficient way to create a report nobody trusts.

---

## Nested traversal

Nested arrays need nested loops when their shape is regular:

```javascript
const groups = [
  ["Ada", "Grace"],
  ["Linus", ["Margaret", "Katherine"]],
  "A value at the outer level"
];

console.log("Nested loop:");
for (let row = 0; row < groups.length; row += 1) {
  if (!Array.isArray(groups[row])) {
    console.log(`outer: ${groups[row]}`);
    continue;
  }

  for (let column = 0; column < groups[row].length; column += 1) {
    console.log(`${row},${column}: ${groups[row][column]}`);
  }
}
```

```text
Nested loop:
0,0: Ada
0,1: Grace
1,0: Linus
1,1: Margaret,Katherine
outer: A value at the outer level
```

The inner loop runs once for each item in the current outer array. Here the second row contains another array as its second item, so JavaScript converts that inner array to text when the template literal prints it. That is a useful warning: a nested loop only traverses the levels we explicitly write.

A file system is another useful example of a tree. Folders are branches, and files are leaves. To visit every file, an algorithm can inspect a folder, visit its files, and then repeat the same work for each child folder. That is a natural use of recursion, which we will cover later.

---

## Be careful when changing a collection

Changing an array while a `for...of` loop is walking it can silently skip values. The loop keeps its own position, while `splice()` shifts the remaining items left:

```javascript
const numbersToRemove = [1, 2, 3, 4, 5];

for (const number of numbersToRemove) {
  const index = numbersToRemove.indexOf(number);
  numbersToRemove.splice(index, 1);
  console.log(`Removed ${number}`);
}

console.log(`Remaining after mutation: ${numbersToRemove.join(", ")}`);
```

```text
Removed 1
Removed 3
Removed 5
Remaining after mutation: 2, 4
```

The loop did not remove every number. After removing `1`, the remaining values shifted left, but the loop moved on to its next internal position. The value `2` was skipped. The same thing happened again with `4`.

> Do not mutate the collection you are currently traversing unless you have deliberately designed for that behavior.
>
> Safer choices include building a new array with `filter()`, traversing a copy, or using a `while` loop whose condition is based on the changing collection.

---

## Try it Yourself

Write a `for...of` loop that prints a list of names, then an indexed loop that prints each position and name. Use `entries()` to produce the same output without looking up the value by index.

Pair two arrays and decide what your program should do when their lengths differ. Add an empty inner array to a nested collection and explain why the inner loop prints nothing. Finally, repair the mutation example so every unwanted number is removed without skipping values.

---

## More background

See [MDN: `for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [MDN: `Array.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries), [MDN: `Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray), and [MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion).

---

