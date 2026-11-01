# Slices and ranges

When we need part of an array, JavaScript gives us `slice()`. When we need a sequence of numbers, JavaScript does not provide a Python-style range operator, so we create the sequence with `Array.from()`, a loop, or another collection method. These are related problems, but they are not the same operation.

## Slicing an array

```javascript
const colors = ["red", "orange", "yellow", "green", "blue"];

console.log(colors.slice(3));
console.log(colors.slice(1, 4));
console.log(colors.slice(-2));
console.log(colors.join(", "));
```

```text
green, blue
orange, yellow, green
green, blue
red, orange, yellow, green, blue
```

> `slice(start, end)` returns a new array from `start` up to, but not including, `end`.
>
> Omitting `end` means “continue to the end.” A negative index counts backward from the end.
>
> `slice()` does not change the original array. This makes it useful when a report or function needs a smaller view of a larger collection.

The end position is exclusive. `colors.slice(1, 4)` includes indexes 1, 2, and 3, but not index 4. That rule is shared with string slicing and makes lengths easy to calculate: the number of selected items is `end - start`.

## Generating a range

Python has a built-in `range()` function, but JavaScript has no range operator or built-in `range()` function. A common modern approach is `Array.from()`:

```javascript
const zeroThroughFour = Array.from({ length: 5 }, (_, index) => index);
const oddNumbers = Array.from({ length: 5 }, (_, index) => index * 2 + 1);

console.log(zeroThroughFour.join(","));
console.log(oddNumbers.join(","));
```

```text
0,1,2,3,4
1,3,5,7,9
```

The object `{ length: 5 }` asks for five positions. The callback receives each index, and the expression turns that index into the value we want. The underscore `_` is a common convention meaning that the first callback argument is not needed.

Here is the practical comparison:

| Tool | What it does | Changes the original? |
| --- | --- | --- |
| `slice(start, end)` | Copies part of an existing array | No |
| `Array.from({ length }, callback)` | Creates a new array from generated positions | No existing array to change |
| `for` loop with `push()` | Builds a sequence one value at a time | Changes the array being built |

Use `slice()` when the values already exist and we want a section of them. Generate a range when the values follow a rule and do not need to be stored anywhere yet. A loop is still perfectly respectable when the rule has branches or needs more explanation. The shortest expression is not automatically the clearest one.

---

## Try it Yourself

Take an array of ten values and print the first three, the last three, and the middle section with `slice()`. Confirm that the original array is unchanged.

Then generate the numbers from 1 through 10, the even numbers from 2 through 20, and a countdown from 5 to 1. Use `Array.from()` for one sequence and a `for` loop for another. Explain why JavaScript has no direct equivalent of Python’s `range()` expression.

---

## More background

See [MDN: Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) and [MDN: Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

---
