const total = 0.1 + 0.2;

console.log(total);
console.log(total === 0.3);
console.log(Math.abs(total - 0.3) < Number.EPSILON);

// For money, store whole cents when the domain allows it
const cents = 10 + 20;
console.log(cents);
