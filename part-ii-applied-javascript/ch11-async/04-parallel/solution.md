## Solution

```javascript
const settings = Promise.resolve("settings");
const profile = Promise.resolve("profile");

async function loadPageData() {
  const results = await Promise.all([settings, profile]);
  for (const result of results) {
    console.log(result);
  }
}

loadPageData();
```

```text
settings
profile
```

`Promise.all` waits for both independent operations before the loop prints their results.

---
