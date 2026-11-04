# Homework: rescue a quadratic algorithm

The starter program checks whether an array contains a duplicate value. It works, but it compares every value with every later value. That is a nested loop, and the worst-case time complexity is `O(n²)`.

```javascript
function hasDuplicateSlow(items) {
  for (let left = 0; left < items.length; left += 1) {
    for (let right = left + 1; right < items.length; right += 1) {
      if (items[left] === items[right]) return true;
    }
  }
  return false;
}
```

The function can return early when it finds a duplicate, but a collection with no duplicates forces it to perform nearly every comparison. That is the input we care about when discussing the worst case.

## Your assignment

Replace `hasDuplicateFast()` with an algorithm whose average time complexity is `O(n)`. Keep the same function signature and output.

Test both functions with:

- a short array containing a duplicate,
- a short array with no duplicate, and
- a large array with no duplicate.

Record the elapsed time for both versions. Then explain why the faster algorithm uses more memory than the nested-loop version.

```text
Duplicates: true
Fast duplicates: true
```

> The goal is not merely to make the code shorter. State the old Big-O complexity, the new Big-O complexity, and the additional space the new approach requires.

---

## Try it Yourself

Add an operation counter to both functions. Run them with 100, 1,000, and 5,000 unique values. Predict how the counts will grow before you run the program.

Do not open the spoiler until you have written and measured your own version.

---

## More background

[MDN: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

---
