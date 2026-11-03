const entry = ["Ada", 42];
const [name, score] = entry;

console.log(name);
console.log(score);

const coordinates = [10, 20, 30];
const [x, , z] = coordinates;
console.log(x);
console.log(z);

const dimensions = [3, 4, 5];
for (const dimension of dimensions) {
  console.log(`Dimension: ${dimension}`);
}

const packed = ["x", "y"];
const [first, second] = packed;
console.log(`${first}, ${second}`);

let left = "red";
let right = "blue";
[left, right] = [right, left];
console.log(`${left}, ${right}`);

const record = ["Ada", 42, "analyst", "unused detail"];
const [recordName, recordScore, ...extra] = record;
console.log(recordName);
console.log(recordScore);
console.log(extra.join(", "));

const original = ["Ada", 42];
const replacement = ["Grace", original[1]];
console.log(replacement.join(", "));
