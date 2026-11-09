## Solution

```javascript
const WINDOW_MILLISECONDS = 30000;
const LIMIT = 2;
const recentSubmissions = [];

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = comment.value.trim();
    if (text === "") {
        status.textContent = "Write something first.";
        return;
    }

    const now = Date.now();
    const recent = recentSubmissions.filter(time => now - time < WINDOW_MILLISECONDS);
    recentSubmissions.splice(0, recentSubmissions.length, ...recent);

    if (recent.length >= LIMIT) {
        status.textContent = "Please wait a while before sending another comment.";
        return;
    }

    recentSubmissions.push(now);
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
    comment.value = "";
    status.textContent = "Thanks for your comment.";
});
```

```text
Please wait a while before sending another comment.
```

The list is pruned on every submission, so it only ever holds the times that still matter. Two recent entries mean two accepted comments in the window, and a third is refused before anything is saved.

The `>= LIMIT` comparison is the one to check carefully. With `>`, the third comment would be accepted, because it would be compared with two rather than three. Read each comparison aloud, and make sure it says what the rule says.

`splice` replaces the array's contents in place. We do this so `recentSubmissions` remains the same array, which is what the rest of the script holds on to.

---
