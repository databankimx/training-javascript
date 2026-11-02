const LOW = 1n;
const HIGH = 1n << 40n;
const flags = LOW | HIGH;

console.log("high flag: " + Boolean(flags & HIGH));
console.log("combined: " + flags);

