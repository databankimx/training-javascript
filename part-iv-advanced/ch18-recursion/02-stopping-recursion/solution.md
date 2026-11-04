# Solution

One possible solution counts upward by making progress toward the limit:

```javascript
function countUp(current, limit) {
  if (limit < 0 || current > limit) return;
  console.log(current);
  countUp(current + 1, limit);
}

countUp(0, 3);
```

```text
0
1
2
3
```

The base case is `current > limit`. Each recursive call increases `current`, so the function eventually reaches that condition.
