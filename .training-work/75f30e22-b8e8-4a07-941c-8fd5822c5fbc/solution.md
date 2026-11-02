# Solution

The important result is that all four algorithms produce a sorted copy while using different strategies:

```javascript
const sorted = values.toSorted((left, right) => left - right);
console.log(sorted.length);
```

```text
1000
```

For application code, prefer the built-in sort unless the lesson, a performance constraint, or a data structure requirement gives you a reason to implement a specialized algorithm yourself.
