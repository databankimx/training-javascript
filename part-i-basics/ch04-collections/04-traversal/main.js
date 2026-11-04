const names = ["Ada", "Grace", "Linus"];

console.log("Simple loop:");
for (const name of names) {
  console.log(`${name} is on the list.`);
}
console.log("The loop is complete.");

console.log("Indexed loop:");
for (let index = 0; index < names.length; index += 1) {
  console.log(`Index ${index}: ${names[index]}`);
}

console.log("entries() loop:");
for (const [index, name] of names.entries()) {
  console.log(`Index ${index}: ${name}`);
}

const letters = ["A", "B", "C", "D"];
const numbers = [10, 20, 30];
console.log("Parallel arrays:");
for (let index = 0; index < Math.min(letters.length, numbers.length); index += 1) {
  console.log(`${letters[index]}: ${numbers[index]}`);
}
console.log(`Unpaired values: ${letters.length - numbers.length}`);

const groups = [
  ["Ada", "Grace"],
  ["Linus", ["Margaret", "Katherine"]],
  "A value at the outer level"
];
console.log("Nested loop:");
for (let row = 0; row < groups.length; row += 1) {
  if (!Array.isArray(groups[row])) {
    console.log(`outer: ${groups[row]}`);
    continue;
  }
  for (let column = 0; column < groups[row].length; column += 1) {
    console.log(`${row},${column}: ${groups[row][column]}`);
  }
}

const numbersToRemove = [1, 2, 3, 4, 5];
for (const number of numbersToRemove) {
  const index = numbersToRemove.indexOf(number);
  numbersToRemove.splice(index, 1);
  console.log(`Removed ${number}`);
}
console.log(`Remaining after mutation: ${numbersToRemove.join(", ")}`);
