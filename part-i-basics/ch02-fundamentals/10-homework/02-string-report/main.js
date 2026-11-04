const rawName = "  Ada Lovelace  ";
const note = "Ada is learning JavaScript.";
const name = rawName.trim();

console.log(`Name: ${name}`);
console.log(`Length: ${name.length}`);
console.log(`Topic: ${note.includes("JavaScript") ? "JavaScript" : "something else"}`);
