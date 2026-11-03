function safeNumber(text) {
  const value = Number(text);
  if (Number.isNaN(value)) {
    return "Not a number";
  }
  return value;
}

console.log(safeNumber("42"));
console.log(safeNumber("oops"));
