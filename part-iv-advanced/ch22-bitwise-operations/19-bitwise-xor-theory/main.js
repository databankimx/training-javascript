const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];
for (const [left, right] of pairs) {
  console.log(`${left} ^ ${right} = ${left ^ right}`);
}
console.log("1010 ^ 0101 = " + (0b1010 ^ 0b0101).toString(2).padStart(4, "0"));
