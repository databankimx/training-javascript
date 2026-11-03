## Solution

```javascript
function loadSettings() {
  return Promise.resolve("Loaded settings");
}

loadSettings().then(message => console.log(message));
```

```text
Loaded settings
```

The callback runs when the promise fulfills. The caller does not need the value immediately, so it registers the work that should happen when the promise is ready.

---
