## Solution

```javascript
const safeComment = sanitize(comment);
comments.innerHTML = `<p class="comment">${safeComment}</p>`;
```

```text
Saved markup-shaped input appears as ordinary text.
```

The data is still stored. The important change is that `sanitize()` escapes the value before it reaches `innerHTML`. This is the legacy pattern. The newer `textContent` version avoids the HTML sink altogether and follows in the next step.

---
