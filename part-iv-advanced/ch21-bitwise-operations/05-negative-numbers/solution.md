# Solution

```javascript
for (const value of [-2, -3, 1]) {
  const bits = (value >>> 0).toString(2).padStart(32, "0");
  console.log(`${value}: ${bits}`);
}
```

```text
-2: 11111111111111111111111111111110
-3: 11111111111111111111111111111101
1: 00000000000000000000000000000001
```

---
