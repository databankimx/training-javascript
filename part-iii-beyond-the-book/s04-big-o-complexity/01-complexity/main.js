const values = [1,2,3,4,5];
let visits = 0;
const found = values.some(value => {
  visits++;
   return value === 5;
});
const index = new Set(values);
console.log(found, visits);
console.log(index.has(5));
