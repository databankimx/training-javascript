## Solution

```javascript
intervalId = setInterval(() => {
  seconds += 1;
  count.textContent = `${seconds} second${seconds === 1 ? "" : "s"}`;
}, 1000);

clearInterval(intervalId);
```

```text
The counter changes once per second and stops cleanly.
```

The interval ID lets the Stop button cancel the repeating work. Keeping that ID also prevents us from starting a second interval while one is already running.

---
