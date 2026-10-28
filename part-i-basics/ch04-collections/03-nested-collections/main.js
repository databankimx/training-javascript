const groups = [
  ["Ada", "Grace"],
  ["Linus", "Margaret"]
];

console.log(groups[0][1]);
console.log(groups[1][0]);

const copy = [...groups];
copy[0].push("changed");
console.log(groups[0].at(-1));
