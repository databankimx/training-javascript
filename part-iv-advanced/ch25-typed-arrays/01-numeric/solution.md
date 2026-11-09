# Solution

```javascript
const values = new Float64Array([1, 2, 3]);
const view = values.subarray(0, 2);

view[0] = 10;

console.log("values: " + [...values].join(", "));

const sum = values.reduce((total, value) => total + value, 0);
console.log("mean: " + sum / values.length);
```

```text
values: 10, 2, 3
mean: 5
```

The important detail is that `subarray()` creates a shared view. Changing the first value through `view` also changes the original `values` array. The mean is then calculated from `10`, `2`, and `3`.

---
