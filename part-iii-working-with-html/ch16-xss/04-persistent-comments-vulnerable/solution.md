## Solution

```javascript
function render() {
    comments.innerHTML = stored
        .map(comment => `<p class="comment">${comment}</p>`)
        .join("");
}
```

```text
Saved comments are rendered as HTML and reappear after a reload.
```

The interesting change from the reflected example is storage. The unsafe value does not disappear with one request. It remains available to the next render, which is why a stored payload can affect people who never supplied it themselves. The demo also rehydrates `script` elements because scripts inserted directly through `innerHTML` are otherwise inert in a browser.

---
