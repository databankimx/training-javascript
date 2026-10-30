const age = 21;
const displayName = "";

const ageLabel = age >= 18 ? "Adult" : "Minor";
const greeting = displayName ? `Hello, ${displayName}` : "Hello, guest";

console.log(ageLabel);
console.log(greeting);
