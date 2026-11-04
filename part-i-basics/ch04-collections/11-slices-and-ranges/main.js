const colors = ["red", "orange", "yellow", "green", "blue"];

console.log(colors.slice(3).join(", "));
console.log(colors.slice(1, 4).join(", "));
console.log(colors.slice(-2).join(", "));

const zeroThroughFour = Array.from({ length: 5 }, (_, index) => index);
const oddNumbers = Array.from({ length: 5 }, (_, index) => index * 2 + 1);

console.log(zeroThroughFour.join(","));
console.log(oddNumbers.join(","));
