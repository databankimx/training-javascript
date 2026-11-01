## Solution

```javascript
function doubleWithKeyword(value) {
  return value * 2;
}

const double = value => value * 2;

console.log(doubleWithKeyword(6));
console.log(double(6));
```

```text
12
12
```

The arrow function implicitly returns its one expression, so it matches the traditional function. Other languages often call this kind of function a lambda, while JavaScript usually calls it an arrow function.

---
