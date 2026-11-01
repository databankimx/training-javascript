## Solution

Here is one reasonable way to calculate the requested values while keeping the arithmetic visible:

```javascript
const unitPrice = 19.99;
const quantity = 3;
const total = unitPrice * quantity;

const items = 17;
const groupSize = 4;
const completeGroups = Math.floor(items / groupSize);
const remainder = items % groupSize;

console.log(`Total: $${total.toFixed(2)}`);
console.log(`Complete groups: ${completeGroups}`);
console.log(`Items left over: ${remainder}`);
console.log("13" + 4);
console.log(13 + 4);
console.log(3 ** 2);
console.log(3 ** 3);
```

```text
Total: $59.97
Complete groups: 4
Items left over: 1
134
17
9
27
```

The multiplication produces the total before formatting adds the dollar display. `Math.floor()` counts only complete groups, while `%` keeps the items that do not fit into a complete group. The two addition examples are deliberately next to one another: the first concatenates text and a number, while the second performs numeric addition. The exponentiation examples show squares and cubes without hiding the operation inside a library call.

---
