const signedIn = true;
const isAdmin = false;
const age = 21;

const canEnter = signedIn && (isAdmin || age >= 18);
const needsReview = !signedIn || (age < 18 && !isAdmin);
const status = signedIn && age >= 18 ? "approved" : "blocked";

console.log(canEnter);
console.log(needsReview);
console.log(status);
