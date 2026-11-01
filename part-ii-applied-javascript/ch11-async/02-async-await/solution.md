## Solution

```javascript
function loadProfile() {
  return Promise.resolve("Loaded profile");
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

showProfile();
```

```text
Loaded profile
```

`await` unwraps the fulfilled value inside the async function.

---
