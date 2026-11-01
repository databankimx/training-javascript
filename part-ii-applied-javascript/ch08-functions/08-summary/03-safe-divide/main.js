function divide(left, right) {
  if (right === 0) {
    return "Cannot divide by zero";
  }
  return left / right;
}

console.log(divide(10, 2));
console.log(divide(10, 0));
