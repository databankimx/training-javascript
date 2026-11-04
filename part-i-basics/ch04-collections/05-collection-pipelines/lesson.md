# Collection pipelines

Once a collection is familiar, we often want to describe what should happen to it: keep the passing scores, change each remaining score, add them up, or sort them. These are the same steps behind filtering search results, transforming API data for a table, and calculating a report total. JavaScript gives us methods that make each transformation visible.

---

## Start with the loop

Before we turn the work into a pipeline, here is the ordinary loop. It is not a bad solution. It is explicit, easy to debug, and often the right choice when the operation has several decisions:

```javascript
const scores = [10, 2, 8, 4];

const passingWithLoop = [];
for (const score of scores) {
  if (score >= 5) {
    passingWithLoop.push(score);
  }
}

console.log("Loop:", passingWithLoop.join(", "));
```

```text
Loop: 10, 8
```

The loop examines every score, keeps the ones at least 5, and pushes them into a new array. The name `passingWithLoop` makes the result clear, and there is no trick hiding in the punctuation.

---

## Say the same thing as a pipeline

The pipeline version names the operations directly:

```javascript
const scores = [10, 2, 8, 4];

const passing = scores.filter(score => score >= 5);

console.log("Filter:", passing.join(", "));
console.log("Map:", passing.map(score => score * 10).join(", "));
console.log("Reduce:", passing.reduce((sum, score) => sum + score, 0));
console.log("Sorted copy:", scores.toSorted((a, b) => a - b).join(", "));
console.log("Original:", scores.join(", "));
```

```text
Filter: 10, 8
Map: 100, 80
Reduce: 18
Sorted copy: 2, 4, 8, 10
Original: 10, 2, 8, 4
```

> `filter()` keeps the items that pass a test.
>
> `map()` creates one new value for each item.
>
> `reduce()` combines the items into one result. The `0` gives an empty collection a defined starting value.
>
> `toSorted()` returns a sorted copy. The numeric comparator is necessary because ordinary `sort()` compares values as text.
>
> `score => score >= 5` is an arrow function, often called a lambda expression. `score` is the parameter, `=>` separates the parameter from the action, and the expression on the right supplies the result. We will cover arrow functions and lambdas in depth later.

The pipeline reads from left to right: select the passing scores, transform them for display, combine them for a total, and sort a copy of the original data. Notice that `map()` does not change `passing`, and `toSorted()` does not rearrange `scores`. These methods create new arrays, which makes the data flow easier to follow.

---

## The order is part of the meaning

Filtering before reducing changes which scores contribute to the total. Mapping before displaying changes the values readers see. These two pipelines are not interchangeable:

```javascript
const scores = [10, 2, 8, 4];

const passingTotal = scores
  .filter(score => score >= 5)
  .reduce((sum, score) => sum + score, 0);

const totalThenFilter = scores
  .reduce((sum, score) => sum + score, 0);

console.log(passingTotal);
console.log(totalThenFilter);
```

```text
18
24
```

The first result answers “What is the total of passing scores?” The second answers “What is the total of every score?” A pipeline is not automatically better than a loop, and a shorter expression is not automatically clearer. Pick the form that lets the next reader see the question the code is answering.

---

## Nested transformations

Pipelines can work at more than one level. If each item is itself an array, use one `map()` for the outer collection and another for the inner values:

```javascript
const rows = [
  [1, 2, 3],
  [4, 5, 6]
];

const doubledRows = rows.map(row => row.map(value => value * 2));
console.log(JSON.stringify(doubledRows));
```

```text
[[2,4,6],[8,10,12]]
```

The inner arrow function runs once for each number in the current row. The result keeps the two-level shape. If the expression grows into a punctuation thicket, stop and write the loops out. Readability is the feature we are trying to preserve.

---

## A quick method table

| Method | What it does | Changes the original? |
| --- | --- | --- |
| `filter()` | Keeps items that pass a test | No |
| `map()` | Transforms every item | No |
| `reduce()` | Combines items into one result | No |
| `sort()` | Sorts the original array | Yes |
| `toSorted()` | Returns a sorted copy | No |

---

## Try it Yourself

Calculate an average for the passing scores. Handle an array where no scores pass without returning `NaN`. Write the loop version first, then the pipeline version, and compare which one is easier to debug.

Create a two-dimensional array and double every value without changing the original. Sort strings and numbers separately so you can see why the numeric comparator matters.

---

## More background

See [MDN: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [MDN: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [MDN: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [MDN: toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted).

---

