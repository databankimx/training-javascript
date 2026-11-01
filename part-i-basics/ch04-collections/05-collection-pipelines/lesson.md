# Collection pipelines

Once a collection is familiar, we often want to describe what should happen to it: keep the passing scores, change each remaining score, add them up, or sort them. These are the same steps behind filtering search results, transforming API data for a table, and calculating a report total. The methods make that intent visible without hiding the code inside a mystery loop.

```javascript
const scores = [10, 2, 8, 4];
const passing = scores.filter(score => score >= 5);

console.log(passing.map(score => score * 10).join(", "));
console.log(passing.reduce((sum, score) => sum + score, 0));
console.log(scores.toSorted((a, b) => a - b).join(","));
```

> `filter()` keeps the items that pass a test.
>
> `score => score >= 5` is an arrow function, often called a lambda expression. `score` is the parameter, `=>` separates the parameter from the action, and the expression on the right supplies the result.
>
> The same syntax appears in `map(score => score * 10)`. Here the action receives one score and returns the value that should go into the new array. We will cover arrow functions and lambdas in depth later, when we study functions properly.
>
> `(a, b) => a - b` has two parameters, so the parameters are wrapped in parentheses. This comparator tells `toSorted()` how two numbers should be ordered.
>
> `map()` creates one new value for each item.
>
> `reduce()` combines the items into one result. The `0` gives an empty collection a defined starting value.
>
> `toSorted()` returns a sorted copy. The numeric comparator is necessary because ordinary `sort()` compares values as text.

```text
100, 80
18
2,4,8,10
```

The pipeline reads from left to right: select the passing scores, transform them for display, combine them for a total, and sort a copy of the original data. The original `scores` array is still available because `toSorted()` does not rearrange it.

The order is part of the meaning. Filtering before reducing changes which scores contribute to the total. Mapping before displaying changes the values readers see. A pipeline is not automatically better than a loop, but it gives each transformation a nameable step when the sequence is straightforward.

---

## Try it Yourself

Calculate an average for the passing scores. Handle an array where no scores pass without returning `NaN`. Sort strings and numbers separately so you can see why the numeric comparator matters.

---

## More background

See [MDN: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [MDN: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), and [MDN: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

---
