# XSS: the fixed pattern

The previous lesson used `innerHTML`, which tells the browser to interpret the incoming value as markup. Most of the time we are not trying to create new elements. We are trying to display what someone entered. For that job, `textContent` is the safer default.

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

document.querySelector("#message").textContent = message;
```

```text
The page displays <strong>Safe-looking markup</strong> as literal text.
```

> `textContent` inserts characters as text. It does not ask the browser to parse them as HTML.
>
> A **safe sink** is a destination that handles untrusted data in a way that cannot turn it into executable markup or script.

This is the same input and the same page element as before. Only the sink changed. That small difference is the whole lesson: safety comes from how the value is used, not from trusting where it came from.

If the page genuinely needs a limited set of formatting tags, use a well-tested sanitizer with an explicit allowlist. Do not replace `innerHTML` with a handful of homemade string replacements and declare victory. The browser has more edge cases than any of us has spare afternoon for.

---

## Try it Yourself

Change the default message to `<em>Still text</em>` and run the page. Then compare it with the vulnerable lesson. In the fixed lesson, the angle brackets should remain visible.

Try the same comparison with a value supplied through the URL. Treat query strings, form fields, stored notes, and API responses as untrusted until the code has deliberately chosen a safe destination.

---

## More background

See [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
