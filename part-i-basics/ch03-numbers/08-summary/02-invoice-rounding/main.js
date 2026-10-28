const subtotalCents = 2499;
const taxRate = 0.084;
const taxCents = Math.round(subtotalCents * taxRate);
const totalCents = subtotalCents + taxCents;

console.log(`Tax: $${(taxCents / 100).toFixed(2)}`);
console.log(`Total: $${(totalCents / 100).toFixed(2)}`);
