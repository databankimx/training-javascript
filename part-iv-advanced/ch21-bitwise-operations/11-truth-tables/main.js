const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];

for (const [left, right] of pairs) {
  console.log("AND " + left + "," + right + ": " + (left & right));
}
for (const [left, right] of pairs) {
  console.log("OR " + left + "," + right + ": " + (left | right));
}
for (const [left, right] of pairs) {
  console.log("XOR " + left + "," + right + ": " + (left ^ right));
}

