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

The callback runs when the promise fulfills.

---
