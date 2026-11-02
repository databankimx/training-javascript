# Persistent XSS: comments form (sanitization fix)

The traditional fix is to escape the saved value before it reaches `innerHTML`. We still save the comment, because saving comments is the feature. We change what gets written into the DOM:

```javascript
function render() {
    comments.innerHTML = stored
        .map(comment => `<p class="comment">${sanitize(comment)}</p>`)
        .join("");
}

function sanitize(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
```

```text
<strong>Important</strong>
```

The angle brackets remain visible because they were converted to HTML entities before `innerHTML` received the string.

> `sanitize()` converts characters such as `<`, `>`, `&`, and quotes to HTML entities.
>
> `innerHTML` then receives escaped text rather than raw user input.

Notice that this version does not trust the storage. It does not need to. Data can arrive through another page, an old database row, an import, or a migration script. Safety comes from the output sink, not from assuming that every earlier writer behaved.

The jQuery contrast is the same: `.html(value)` asks for markup, while `.text(value)` displays text. This sanitized version is useful to recognize in legacy code. The next lesson changes methodology to the newer `textContent` pattern, which avoids the HTML sink entirely when the feature only needs text.

---

## Try it Yourself

Save `<strong>Important</strong>` in the form, reload the page, and compare it with the vulnerable form. The sanitized page displays the characters literally on every load.

Now test the actual security case:

```html
<script>alert("I injected JavaScript!");</script>
```

Save that as a comment, reload the page, and confirm that the entire script appears as text. No alert should appear. Clear the comments when you are finished.

---

## More background

See [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), [MDN: Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
