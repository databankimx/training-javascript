import { isCompletePerson } from "./validation.js";
import { displayName } from "./formatting.js";

const person = {
  firstName: "Ada",
  lastName: "Lovelace",
  name: "Ada Lovelace",
  email: "ada@example.com"
};

console.log(isCompletePerson(person) ? "Valid" : "Incomplete");
console.log(displayName(person));
