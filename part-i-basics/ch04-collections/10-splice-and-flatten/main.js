const colors = ["red", "green"];
colors.splice(1, 0, "blue");
console.log(colors.join(","));

const removed = colors.toSpliced(1, 1);
console.log(removed.join(","));
console.log(colors.join(","));

const nested = [[1, 2], [3, 4]];
console.log(nested.flat().join(","));
