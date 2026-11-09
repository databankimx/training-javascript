const DARK_MODE = 1;
const BETA_SEARCH = 2;
const COMPACT_VIEW = 4;

const userFeatures = DARK_MODE | COMPACT_VIEW;

console.log("dark mode: " + Boolean(userFeatures & DARK_MODE));
console.log("beta search: " + Boolean(userFeatures & BETA_SEARCH));
console.log("compact view: " + Boolean(userFeatures & COMPACT_VIEW));

