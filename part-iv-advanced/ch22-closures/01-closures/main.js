function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}
const a = makeCounter(10);
const b = makeCounter();
console.log(a(), a(), b());

let adjective = "awesome";

function describe() {
  return `JavaScript is ${adjective}`;
}

function describeWithLocalAdjective() {
  const adjective = "fantastic";
  return `JavaScript is ${adjective}`;
}

function makeDescription() {
  let modifier = "really";

  return {
    show() {
      return `JavaScript is ${modifier} useful`;
    },
    change(nextModifier) {
      modifier = nextModifier;
    }
  };
}

const description = makeDescription();
console.log(describe());
console.log(describeWithLocalAdjective());
console.log(describe());
console.log(description.show());
description.change("extremely");
console.log(description.show());

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
