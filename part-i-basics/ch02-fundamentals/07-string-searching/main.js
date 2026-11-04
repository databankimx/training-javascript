const phrase = "JavaScript makes forms useful";

// Searching
console.log(phrase.includes("forms"));
console.log(phrase.indexOf("a"));
console.log("red, green, red".lastIndexOf("red"));
console.log(phrase.startsWith("Java"));
console.log(phrase.endsWith("useful"));

// Transforming
console.log(JSON.stringify("  Ada  ".trimStart()));
console.log(JSON.stringify("  Ada  ".trimEnd()));
console.log("red red".replaceAll("red", "blue"));
console.log("Ada,Grace".split(",").length);
console.log("ha".repeat(3));
