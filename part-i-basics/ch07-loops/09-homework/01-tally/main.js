const scores = [6, 9, 4, 8, 3];
let count = 0;
let total = 0;

for (const score of scores) {
  if (score >= 5) {
    count += 1;
    total += score;
  }
}

console.log(`Count: ${count}`);
console.log(`Total: ${total}`);
