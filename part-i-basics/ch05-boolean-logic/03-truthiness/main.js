const values = [false, 0, "", null, undefined, NaN, [], {}];

for (const value of values) {
  console.log(Boolean(value));
}
