const names = ["Ada", "Grace", "Linus", "James"];
const target = "Linus";
let foundIndex = -1;

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === target) {
    foundIndex = index;
    break;
  }
}

console.log(`Found at index: ${foundIndex}`);
