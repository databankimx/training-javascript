const names = ["Ada", "Grace", "Linus"];

console.log(names.includes("Grace"));
console.log(names.indexOf("Grace"));
console.log(names.find(name => name.startsWith("G")));
console.log(names.some(name => name.length > 4));
console.log(names.every(name => name.length > 3));
