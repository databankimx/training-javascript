const students = [
  ["Ada", [90, 95]],
  ["Grace", [88, 92]]
];

const reports = students.map(([name, scores]) => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return [name, total / scores.length];
});

for (const [name, average] of reports) {
  console.log(`${name}: ${average}`);
}

console.log(reports.toSorted((a, b) => b[1] - a[1])[0][0]);
