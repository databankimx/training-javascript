# Solution

```javascript
for (const value of [0b0011, 0b1000, 0b1111]) {
  const result = (~value) & 0b1111;
  console.log(result.toString(2).padStart(4, "0"));
}
```

```text
1100
0111
0000
```

---
