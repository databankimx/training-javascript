## Solution

```javascript
function welcome(person) {
  if (!person.name) {
    throw new Error("Name is required");
  }
  return `Welcome, ${person.name}`;
}

for (const person of [{ name: "Ada" }, {}]) {
  try {
    console.log(welcome(person));
  } catch (error) {
    console.log(error.message);
  }
}
```

```text
Welcome, Ada
Name is required
```

The function owns the validation rule, while the caller owns the response to the failure.

---
