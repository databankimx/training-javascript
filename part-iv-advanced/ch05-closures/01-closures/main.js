function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}
const a = makeCounter(10);
const b = makeCounter();
console.log(a(), a(), b());

function generatePower(exponent) {
  return base => base ** exponent;
}

const square = generatePower(2);
const cube = generatePower(3);

function report(name, operation, value) {
  console.log(name + " " + value + ": " + operation(value));
}

report("square", square, 2);
report("cube", cube, 3);
