## Solution

```javascript
items.addEventListener("click", event => {
  if (event.target.matches("li")) {
    status.textContent = `Selected: ${event.target.textContent}`;
  }
});
```

```text
New and existing list items respond to one handler.
```

The parent list is stable, so one delegated handler can serve children that do not exist yet. That also avoids attaching a growing collection of duplicate listeners.

---
