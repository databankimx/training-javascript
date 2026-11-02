# Homework: load data in order

Await a user first, then pass that user's name into a second asynchronous function. This is a deliberately sequential workflow: the second request cannot begin until the first result tells us whose tasks to load.

```javascript
const loadUser = () => Promise.resolve("Ada");
const loadTasks = name => Promise.resolve(`tasks for ${name}`);

async function load() {
  const user = await loadUser();
  const tasks = await loadTasks(/* user name */);
  console.log(`user: ${user}`);
  console.log(tasks);
}

load();
```

```text
user: Ada
tasks for Ada
```

---

## Try it Yourself

Add error handling around both awaits. Explain why these operations are sequential rather than parallel.

Use **Show example (spoiler)** after you have tested your function.

---

## More background

See [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

---
