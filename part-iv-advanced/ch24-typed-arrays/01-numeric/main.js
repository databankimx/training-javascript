const values = new Float64Array([1, 2, 3]);
const view = values.subarray(0, 2);

view[0] = 10;

console.log("values: " + [...values].join(", "));

const sum = values.reduce((total, value) => total + value, 0);
console.log("mean: " + sum / values.length);
