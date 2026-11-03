const scores = [10, 2, 8, 4];

const passingWithLoop = [];
for (const score of scores) {
  if (score >= 5) {
    passingWithLoop.push(score);
  }
}

console.log("Loop:", passingWithLoop.join(", "));

const passing = scores.filter(score => score >= 5);
console.log("Filter:", passing.join(", "));
console.log("Map:", passing.map(score => score * 10).join(", "));
console.log("Reduce:", passing.reduce((sum, score) => sum + score, 0));
console.log("Sorted copy:", scores.toSorted((a, b) => a - b).join(", "));
console.log("Original:", scores.join(", "));

const rows = [
  [1, 2, 3],
  [4, 5, 6]
];
const doubledRows = rows.map(row => row.map(value => value * 2));
console.log("Nested map:", JSON.stringify(doubledRows));
