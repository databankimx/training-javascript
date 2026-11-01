## Solution

```javascript
function validatePerson(person) {
  if (!person.name) throw new Error("Name is required");
  if (typeof person.age !== "number") throw new Error("Age is required");
  return `Welcome, ${person.name}`;
}

for (const person of [{ name: "Ada", age: 42 }, { name: "Grace" }]) {
  try {
    console.log(validatePerson(person));
  } catch (error) {
    console.log(error.message);
  }
}
```

```text
Welcome, Ada
Age is required
```

The function throws the specific validation failure, and the caller catches it without stopping the rest of the loop.

---
