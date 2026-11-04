const modules = [
  ["main.js", "uses reports.js"],
  ["reports.js", "formats task data"]
];

for (const [name, responsibility] of modules) {
  console.log(`${name} ${responsibility}`);
}
