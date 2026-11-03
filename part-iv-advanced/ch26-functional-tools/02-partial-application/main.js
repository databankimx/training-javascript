const label = (prefix, message) => prefix + ": " + message;
const info = message => label("INFO", message);

console.log(info("ready"));
console.log(info("saved"));
