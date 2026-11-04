## Solution

```javascript
function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

const settings = delay("settings", 30);
const profile = delay("profile", 0);

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

`Promise.all` waits for both independent operations before the loop prints their results. The profile resolves first, but the input order still determines the result order, which keeps the output predictable even when the real operations finish at different times.

---
