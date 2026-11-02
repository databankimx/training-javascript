const values = new Float64Array([1,2,3]);
const view = values.subarray(0,2);
view[0] = 10;
console.log([...values]);
const sum = values.reduce((a,b) => a+b,0);
console.log(sum / values.length);
