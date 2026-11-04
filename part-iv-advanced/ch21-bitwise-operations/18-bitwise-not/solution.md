# Solution

```javascript
for (const value of [0b10101010, 0b11000011]) {
  const result = (~value) & 0xff;
  console.log(result.toString(2).padStart(8, "0"));
}
```

```text
01010101
00111100
```

---
