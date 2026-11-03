let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}

const messages = ["first message", "second message", "quit"];
let active = true;
let index = 0;

while (active) {
  const message = messages[index];

  if (message === "quit") {
    active = false;
  } else {
    console.log(message);
    index++;
  }
}

console.log(`Loop active: ${active}`);

const numbers = [1, 2, 3, 4, 5];
while (numbers.length > 0) {
  console.log(numbers.shift());
}

console.log(`Remaining: ${numbers.length}`);
