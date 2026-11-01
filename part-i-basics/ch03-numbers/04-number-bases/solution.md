# Exercise solution

Here is one reasonable way to use a hexadecimal literal and display the same stored number in several bases.

```javascript
const value = 0x33;

console.log(value);
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));
```

```text
51
110011
63
33
```

The literal is hexadecimal, but the stored value is the ordinary number 51. Each `toString()` call creates a different text representation of that same value. The number does not change just because we chose a different way to display it. The hexadecimal digits `3` and `3` represent `3 × 16 + 3`, which is 51 in decimal.

---
