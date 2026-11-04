function countdown(n) {
  if (n < 0) return;
  if (n === 0) {
    console.log("Liftoff!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);
