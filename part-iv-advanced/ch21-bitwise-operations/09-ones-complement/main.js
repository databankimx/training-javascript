const value = 0b0101;
const inverted = (~value) & 0b1111;
console.log(`0101 -> ${inverted.toString(2).padStart(4, "0")}`);
