# Solution

```javascript
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
```

```text
name: Ada
role: analyst
city: Chicago
updated role: engineer
new department: Research
after delete: undefined
missing property: undefined
json: {"name":"Ada","role":"engineer","contact":{"city":"Chicago"}}
restored city: Chicago
```

The object keeps related values together under descriptive property names. Dot notation is convenient when the property name is written directly in the code. Bracket notation does the same lookup with a string, which becomes useful when a property name is stored in a variable. Assignment changes an existing property or adds a new one, while `delete` removes one. A missing property produces `undefined`, which is useful for optional data but unforgiving of typos.

`JSON.stringify` turns the object into text suitable for storage or transport. `JSON.parse` turns that text back into a new object, so `restoredPerson.contact.city` works just like the original lookup.

---

