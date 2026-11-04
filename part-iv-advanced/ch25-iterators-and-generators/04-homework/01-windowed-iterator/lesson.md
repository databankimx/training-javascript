# Homework: a windowed iterator

A sliding window is useful when code needs to inspect neighboring values, such as three-day averages or groups of adjacent readings. Your generator should yield each complete window and stop before producing a partial one.

```javascript
function* windows(values, size) {
  // Yield each complete window here.
}
```

```text
1,2,3
2,3,4
3,4,5
```

## Try it Yourself

Implement `windows(values, size)`. Test the ordinary case shown above, a window equal to the input length, and a window larger than the input. The last case should yield nothing.

---
