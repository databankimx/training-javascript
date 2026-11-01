const score = 82;
let label;

if (score >= 90) {
  label = "A";
} else if (score >= 80) {
  label = "B";
} else if (score >= 70) {
  label = "C";
} else {
  label = "Needs more practice";
}

console.log(label);
