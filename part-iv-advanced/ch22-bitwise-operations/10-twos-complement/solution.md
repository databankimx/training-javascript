# Solution

```javascript
for (const value of [1, 2, 4]) {
  const negative = ((~value) + 1) & 0b1111;
  console.log(`-${value}: ${negative.toString(2).padStart(4, "0")}`);
}
```

```text
-1: 1111
-2: 1110
-4: 1100
```

---
