# Homework: load independent data

Use `Promise.all` to wait for settings and notifications together.

```javascript
const settings = Promise.resolve("settings");
const notifications = Promise.resolve("notifications");

async function load() {
  const results = await Promise.all([/* promises */]);
  for (const result of results) console.log(result);
}

load();
```

```text
settings
notifications
```

---

## Try it Yourself

Add a third independent value. Then make one promise reject and handle the failure with `try` and `catch`.

Use **Show example (spoiler)** after you have tested your function.

---

## More background

See [MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

---
