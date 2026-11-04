# Exercise solution

Here is one way to demonstrate the difference between whole-value conversion, binary parsing, and numeric-prefix parsing.

```javascript
const value = "1010";

console.log(Number(value));
console.log(Number.parseInt(value, 2));
console.log(Number.parseInt("12.5px", 10));
console.log(Number.parseFloat("12.5px"));
```

```text
1010
10
12
12.5
```

`Number()` reads the whole string as decimal text. The explicit radix tells `Number.parseInt()` to read `1010` as binary, while the two parse methods accept the numeric prefix in `12.5px`. That is useful when the prefix is intentional, but it is exactly why `Number()` is usually the better default for validating complete input. The qualified names also make the preferred modern form clear when this code is reviewed by a linter such as SonarQube.

---
