const person = {
  name: "Ada",
  role: "analyst",
  contact: {
    city: "Chicago"
  }
};

console.log("name: " + person.name);
console.log("role: " + person["role"]);
console.log("city: " + person.contact.city);

person.role = "engineer";
person.department = "Research";
console.log("updated role: " + person.role);
console.log("new department: " + person.department);

delete person.department;
console.log("after delete: " + person.department);
console.log("missing property: " + person.office);

const jsonText = JSON.stringify(person);
console.log("json: " + jsonText);

const restoredPerson = JSON.parse(jsonText);
console.log("restored city: " + restoredPerson.contact.city);
