# Solution

```javascript
for (const [left, right] of [[0b0011, 0b0010], [0b0111, 0b0001], [0b1111, 0b0001]]) {
  const result = left + right;
  console.log(`${left.toString(2).padStart(4, "0")} + ${right.toString(2).padStart(4, "0")} = ${result.toString(2)}`);
}
```

```text
0011 + 0010 = 101
0111 + 0001 = 1000
1111 + 0001 = 10000
```

---
