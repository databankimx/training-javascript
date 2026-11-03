function countdown(n) {
  if (n < 0) {
    console.log("Cannot count down from a negative number.");
    return false;
  }
  if (n === 0) {
    console.log("Liftoff!");
    return true;
  }
  console.log(n);
  return countdown(n - 1);
}

console.log(`Completed: ${countdown(3)}`);
