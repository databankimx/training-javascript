# String inspection and extraction - exercise solution

Here is one reasonable way through this exercise:

```javascript
const sentence = "JavaScript is useful";
console.log(sentence.length);
console.log(sentence.at(0));
console.log(sentence.at(-1));
console.log(sentence.slice(11, 17));
```

```text
20
J
l
useful
```

The indexes are zero-based, and the ending index is excluded from `slice()`. `at(-1)` is a convenient way to ask for the final character without calculating `length - 1` yourself. `slice()` accepts negative indexes, while `substring()` treats negative values as zero and swaps its arguments when the first is larger. `charAt()` and `charCodeAt()` use older, stricter out-of-range results, so the choice of method affects how a boundary case behaves.

---
