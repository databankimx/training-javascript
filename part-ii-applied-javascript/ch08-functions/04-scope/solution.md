## Solution

```javascript
const applicationName = "Training app";

function report(topic) {
  const label = `${topic} is reviewing JavaScript`;
  console.log(label);
  console.log(applicationName);
}

report("Ada");
```

```text
Ada is reviewing JavaScript
Training app
```

`label` is local to the function, while `applicationName` is read from the outer scope. The local name stays safely inside `report`; passing the application name as a parameter would make the dependency more visible.

---
