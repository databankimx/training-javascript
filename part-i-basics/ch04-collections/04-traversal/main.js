const names = ["Ada", "Grace", "Linus"];

for (const name of names) {
  console.log(name);
}

for (let index = 0; index < names.length; index += 1) {
  console.log(`${index}: ${names[index]}`);
}

const groups = [["Ada", "Grace"], ["Linus", "Margaret"]];
for (let row = 0; row < groups.length; row += 1) {
  for (let column = 0; column < groups[row].length; column += 1) {
    console.log(`${row},${column}: ${groups[row][column]}`);
  }
}
