const READ = 1 << 0, WRITE = 1 << 1, EXECUTE = 1 << 2;
let permissions = READ | WRITE;
console.log(Boolean(permissions & READ));
console.log(Boolean(permissions & EXECUTE));
permissions &= ~WRITE;
console.log(permissions);
