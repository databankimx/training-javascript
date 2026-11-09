const values = Array.from({ length: 5 }, (_, index) => index + 1);
let linearOperations = 0;
for (const value of values) {
  linearOperations += 1;
  if (value === 5) break;
}
let nestedOperations = 0;
for (const left of values) {
  for (const right of values) {
    nestedOperations += 1;
    if (left === right) break;
  }
}
console.log(`Linear: ${linearOperations}`);
console.log(`Nested: ${nestedOperations}`);
