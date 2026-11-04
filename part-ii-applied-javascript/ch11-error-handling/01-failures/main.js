function parseScore(text) {
  const score = Number(text);
  return Number.isNaN(score) ? "Invalid number" : score;
}

console.log(parseScore("12"));
console.log(parseScore("twelve"));

const text = '{"name": "Ada"';
console.log("Before parsing");

try {
  const data = JSON.parse(text);
  console.log(data.name);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("After parsing");
