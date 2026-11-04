# Text versus HTML

`.text(...)` and `.html(...)` look like neighboring methods, but they do different jobs. `.text(...)` treats its argument as text. `.html(...)` parses its argument as markup. That distinction is central to safe DOM updates and to the XSS lessons earlier in the tutorial.

---

```javascript
const userText = "<strong>Customer supplied text</strong>";
const safeHtml = "<strong>Trusted application markup</strong>";
$("#safe").text(userText);
$("#markup").html(safeHtml);
console.log("text() displays characters; html() interprets markup.");
```

```text
<strong>Customer supplied text</strong>
Trusted application markup
```

The first paragraph displays the angle brackets because `.text(...)` inserts characters. The second renders bold text because `.html(...)` interprets the string as markup.

> **Safety rule:** Use `.text(...)` for user-provided or otherwise untrusted content. Use `.html(...)` only when the markup is deliberately constructed or has been safely sanitized.

There is no prize for using `.html(...)` when `.text(...)` is enough. The prize is avoiding an XSS bug that somebody discovers after the release meeting.

---

## Try it Yourself

Replace `userText` with a string containing a `<script>` element. Confirm that `.text(...)` displays it as text. Do not switch that line to `.html(...)` unless you can explain exactly why the input is trusted.

---

## More Background

- [jQuery `.text()`](https://api.jquery.com/text/)
- [jQuery `.html()`](https://api.jquery.com/html/)
- [OWASP XSS Prevention](https://owasp.org/www-community/attacks/xss/)

---
