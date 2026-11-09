const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];
for (const [left, right] of pairs) {
  console.log(`${left} & ${right} = ${left & right}`);
}
console.log("1011 & 0110 = " + (0b1011 & 0b0110).toString(2).padStart(4, "0"));
