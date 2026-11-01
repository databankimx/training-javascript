# Homework: validate a person

Validate an object before using it. Require both a name and a numeric age. Throw an `Error` when either value is missing, and catch it at the call site.

```javascript
function validatePerson(person) {
  if (/* missing name */) throw new Error("Name is required");
  if (/* missing numeric age */) throw new Error("Age is required");
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

---

## Try it Yourself

Add a rule for a non-negative age. Test an empty name, a string age, and a negative age.

Use **Show example (spoiler)** after you have tested your validation.

---

## More background

See [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

---
