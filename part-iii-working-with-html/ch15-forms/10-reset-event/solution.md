## Solution

```javascript
form.addEventListener("reset", () => {
  document.querySelector("#term").classList.remove("invalid");
  status.textContent = "Search settings reset.";
});
```

The reset handler clears styling that belongs to the application rather than to the form controls themselves.

```text
After Reset: Search settings reset.
```

---
