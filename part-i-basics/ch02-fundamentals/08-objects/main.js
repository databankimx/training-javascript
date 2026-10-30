const person = {
  name: "Ada",
  role: "analyst",
  contact: {
    city: "Chicago"
  }
};

console.log(person);
console.log(person.name);
console.log(person["role"]);
console.log(person.contact.city);

const jsonText = JSON.stringify(person);
console.log(jsonText);

const restoredPerson = JSON.parse(jsonText);
console.log(restoredPerson.contact.city);
