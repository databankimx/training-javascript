## Solution

```javascript
const loadUser = () => Promise.resolve("Ada");
const loadTasks = name => Promise.resolve(`tasks for ${name}`);

async function load() {
  const user = await loadUser();
  const tasks = await loadTasks(user);
  console.log(`user: ${user}`);
  console.log(tasks);
}

load();
```

```text
user: Ada
tasks for Ada
```

The second operation needs the first result, so the awaits are deliberately sequential.

---
