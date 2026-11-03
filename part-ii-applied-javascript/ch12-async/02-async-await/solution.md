## Solution

```javascript
function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

function loadProfile() {
  return delay("Loaded profile", 30);
}

function loadSettings() {
  return delay("Loaded settings", 0);
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

async function showSettings() {
  const settings = await loadSettings();
  console.log(settings);
}

showProfile();
showSettings();
```

```text
Loaded settings
Loaded profile
```

`await` unwraps the fulfilled value inside each async function. Both functions start before either one is awaited by the caller, so the shorter settings operation prints first. Each function still reads in a familiar top-to-bottom order, and each returns a promise to its caller.

---
