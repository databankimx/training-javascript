# Parsing numeric text - exercise solution

```javascript
const value = "1010";

console.log(Number(value));
console.log(parseInt(value, 2));
console.log(parseInt("12.5px", 10));
console.log(parseFloat("12.5px"));
```

```text
1010
10
12
12.5
```

`Number()` reads the whole string as decimal text. The explicit radix tells `parseInt()` to read `1010` as binary, while the two parse methods accept the numeric prefix in `12.5px`.

---
