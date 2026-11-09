# Solution

```javascript
function* windows(values, size) {
  for (let start = 0; start + size <= values.length; start += 1) {
    yield values.slice(start, start + size);
  }
}

for (const window of windows([1, 2, 3, 4, 5], 3)) {
  console.log(window.join(","));
}
```

```text
1,2,3
2,3,4
3,4,5
```

The loop condition requires a complete window to fit before yielding it. That is why the generator naturally stops before a partial final group.

---
