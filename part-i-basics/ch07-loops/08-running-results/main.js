const scores = [8, 4, 7, 3];
let total = 0;
const passing = [];

for (const score of scores) {
  total += score;
  if (score >= 5) {
    passing.push(score);
  }
}

console.log(`Total: ${total}`);
console.log(`Passing: ${passing.join(", ")}`);
