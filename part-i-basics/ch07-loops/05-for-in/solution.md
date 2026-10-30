## Solution

```javascript
const person = { name: "Ada", role: "analyst" };

for (const propertyName in person) {
  console.log(propertyName, person[propertyName]);
}
```

```text
name Ada
role analyst
```

The loop variable contains each property name, and bracket notation retrieves the matching value.

---
