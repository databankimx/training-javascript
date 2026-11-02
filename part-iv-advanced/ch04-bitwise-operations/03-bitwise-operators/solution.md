# Solution

The four operators apply Boolean-style logic to each matching bit. AND keeps shared bits, OR combines bits, XOR keeps differences, and NOT flips every bit.

```javascript
const left = 0b1010;
const right = 0b0101;
console.log(left & right);
console.log(left | right);
console.log(left ^ right);
```

```text
0
15
15
```

---

