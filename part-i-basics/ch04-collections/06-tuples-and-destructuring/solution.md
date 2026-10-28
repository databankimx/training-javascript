# Tuples and destructuring - exercise solution

```javascript
const product = ["Notebook", 4.5];
const [name, price] = product;
const point = [3, 7, 11];
const [x, , z] = point;

console.log(name);
console.log(price);
console.log(`${x},${z}`);
```

```text
Notebook
4.5
3,11
```

The product array acts as a two-value tuple, so destructuring gives the positions useful names. The skipped coordinate demonstrates that destructuring follows the array positions even when we do not need every item.

---
