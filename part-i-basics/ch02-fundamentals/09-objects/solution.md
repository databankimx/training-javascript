## Solution

```javascript
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
```

```text
{ name: 'Ada', role: 'analyst', contact: { city: 'Chicago' } }
Ada
analyst
Chicago
{"name":"Ada","role":"analyst","contact":{"city":"Chicago"}}
Chicago
```

The object keeps related values together under descriptive property names. Dot notation is convenient when the property name is written directly in the code. Bracket notation does the same lookup with a string, which becomes useful when a property name is stored in a variable.

`JSON.stringify` turns the object into text suitable for storage or transport. `JSON.parse` turns that text back into an object, so `restoredPerson.contact.city` works just like the original lookup.

---
