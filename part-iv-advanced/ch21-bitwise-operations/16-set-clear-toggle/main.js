const READ = 1;
const WRITE = 2;
const EXECUTE = 4;
let permissions = READ | WRITE;

permissions |= EXECUTE;
console.log("Granted execute: " + permissions);
permissions &= ~WRITE;
console.log("Removed write: " + permissions);
permissions ^= EXECUTE;
console.log("Toggled execute: " + permissions);

