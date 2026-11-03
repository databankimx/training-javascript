## Solution

```javascript
const paragraph = document.createElement("p");
paragraph.className = "comment";
paragraph.textContent = comment;
comments.append(paragraph);
```

```text
Saved markup-shaped input appears as ordinary text.
```

The data is still stored. The newer pattern changes the destination: `textContent` places the value in a text node instead of asking the browser to interpret it as HTML.

---
