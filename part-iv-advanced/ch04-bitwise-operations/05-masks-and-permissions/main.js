const READ = 1 << 0;
const WRITE = 1 << 1;
const EXECUTE = 1 << 2;

const permissions = READ | WRITE;
console.log("Initial: " + permissions);
console.log("Can read: " + Boolean(permissions & READ));
console.log("Can execute: " + Boolean(permissions & EXECUTE));

