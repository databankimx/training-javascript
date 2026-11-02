# Solution: Creating and adding elements

```javascript
const notices = document.querySelector("#notices");
const addButton = document.querySelector("#add-notice");
const messages = [
  ["Backup complete", "The nightly backup finished without errors."],
  ["Maintenance planned", "The service will restart at midnight."]
];

addButton.addEventListener("click", () => {
  const next = messages.shift();
  if (!next) return;

  const notice = document.createElement("article");
  const heading = document.createElement("h2");
  const detail = document.createElement("p");
  heading.textContent = next[0];
  detail.textContent = next[1];
  notice.append(heading, detail);
  notices.append(notice);
});
```

The array supplies a new heading and detail on each click. `shift()` removes the next pair, and the guard stops us from adding an empty notice after the messages are exhausted. The important DOM work is still `createElement`, `textContent`, and `append`.

```text
After two clicks: Backup complete and Maintenance planned notices appear.
```

---
