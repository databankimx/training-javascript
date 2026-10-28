const scores = [10, 2, 8, 4];
const passing = scores.filter(score => score >= 5);

console.log(passing.map(score => score * 10).join(", "));
console.log(passing.reduce((sum, score) => sum + score, 0));
console.log(scores.toSorted((a, b) => a - b).join(","));
