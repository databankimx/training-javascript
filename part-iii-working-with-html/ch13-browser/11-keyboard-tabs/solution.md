## Solution

```javascript
const next = tabs[(index + direction + tabs.length) % tabs.length];
next.focus();
selectTab(next);
```

```text
Arrow keys move focus and select the neighboring tab.
```

The modulo expression wraps from the last tab back to the first and from the first back to the last. The focus move and selection update happen together, so the interface does not leave the keyboard user in one tab while showing another panel.

---
