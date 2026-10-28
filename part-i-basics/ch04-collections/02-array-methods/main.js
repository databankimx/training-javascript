const colors = ["red", "green"];

colors.push("blue");
console.log(colors.at(-1));
console.log(colors.pop());
console.log(colors.shift());
colors.unshift("red");
console.log(colors.join(", "));

const copy = colors.slice(0, 2);
console.log(colors.length);
console.log(copy.length);
