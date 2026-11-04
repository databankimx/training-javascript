const value = 0b0101;
const negative = ((~value) + 1) & 0b1111;
console.log(`0101 -> ${negative.toString(2).padStart(4, "0")}`);
