for (let number = 1; number <= 10; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
  if (number === 5) {
    console.log("Found 5");
    break;
  }
}
