# XSS: reflected input (textContent fix)

The sanitized lesson showed the older way to keep an HTML sink safe. For a reflected message that is supposed to be text, the newer pattern is shorter and easier to audit:

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

document.querySelector("#message").textContent = message;
```

```text
<strong>Safe-looking markup</strong>
```

> `textContent` inserts the value as text. It does not ask the browser to parse the value as HTML.
>
> This is a newer pattern, not a new feature. The important change is the methodology: if the feature needs text, choose a text sink instead of sanitizing data for an HTML sink.

The jQuery equivalent is `.text(value)`. You will encounter `.html(value)` in older forms, so the goal is not to pretend the older code does not exist. The goal is to recognize it and decide whether it can be replaced with a text-only destination.

---

## Try it Yourself

Change the default message to `<em>Still text</em>` and run the page. The angle brackets remain visible. Compare this with the sanitized lesson, then explain why the `textContent` version does not need a `sanitize()` function.

---

## More background

See [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and [MDN: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

---
