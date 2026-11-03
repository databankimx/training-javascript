function describeTasks(name, count) {
  console.log(`${name} has ${count} tasks`);
}

describeTasks("Ada", 3);

function totalScores(label, ...scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  console.log(`${label}: ${total}`);
}

totalScores("Ada", 10, 8, 9);
totalScores("Grace", 7, 6);

function describePet({ name, type = "dog", indoor = false }) {
  const location = indoor ? "indoor" : "outdoor";
  return `${name} is an ${location} ${type}`;
}

console.log(describePet({ name: "Rover" }));
console.log(describePet({ type: "cat", name: "Pickles", indoor: true }));
