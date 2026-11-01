// continue: skip one iteration
for (let number = 1; number <= 5; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
}

// break: stop the loop completely
for (let number = 1; number <= 10; number += 1) {
  if (number === 5) {
    console.log("Found 5");
    break;
  }
  console.log(number);
}
