// if and else: choose between two outcomes
const signedIn = false;

if (signedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// if and one else if: choose between two score ranges
const score = 84;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
}

// Multiple else if branches: the first matching branch wins
const gradeScore = 82;

if (gradeScore >= 90) {
  console.log("A");
} else if (gradeScore >= 80) {
  console.log("B");
} else if (gradeScore >= 70) {
  console.log("C");
} else {
  console.log("Needs more practice");
}

// The final else is optional when there is no fallback work to do
const orderTotal = 120;

if (orderTotal >= 100) {
  console.log("Discount applied");
} else if (orderTotal >= 50) {
  console.log("Free shipping");
}

// Independent if statements: more than one check can run
const age = 42;
let senior = false;
let adult = false;

if (age >= 65) {
  senior = true;
}

if (age >= 18) {
  adult = true;
}

console.log(senior);
console.log(adult);
