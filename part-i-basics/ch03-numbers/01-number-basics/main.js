const whole = 42;
const decimal = 19.95;
const text = "42";

console.log(typeof whole);
console.log(Number.isInteger(whole));
console.log(Number.isInteger(decimal));
console.log(Number.isFinite(Number(text)));
console.log(Number.isNaN(Number("oops")));
