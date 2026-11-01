## Solution

```javascript
const settings = Promise.resolve("settings");
const notifications = Promise.resolve("notifications");

async function load() {
  const results = await Promise.all([settings, notifications]);
  for (const result of results) console.log(result);
}

load();
```

```text
settings
notifications
```

The two promises are independent, so `Promise.all` expresses the shared wait clearly.

---
