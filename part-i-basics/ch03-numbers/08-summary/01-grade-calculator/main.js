const earned = 33;
const possible = 40;
const percentage = earned / possible * 100;
const grade = percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : "Needs more practice";

console.log(`${percentage.toFixed(1)}%`);
console.log(grade);
