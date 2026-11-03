# XSS: reflected input (sanitization fix)

The previous lesson used `innerHTML`, which tells the browser to interpret the incoming value as markup. The traditional method to make that sink safer is to escape the characters that have special meaning in HTML:

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

function sanitize(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

document.querySelector("#message").innerHTML = sanitize(message);
```

```text
The page displays <strong>Safe-looking markup</strong> as literal text.
```

> `textContent` inserts characters as text. It does not ask the browser to parse them as HTML.
>
> A **safe sink** is a destination that handles untrusted data in a way that cannot turn it into executable markup or script.

The input is identical to the previous lesson, but the special HTML characters are escaped before they reach the sink. In jQuery, this is the distinction between passing escaped text to `.html(value)` and using `.text(value)`.

This pattern is useful to recognize in older code, but hand-written sanitizers are easy to get wrong. The next lessons introduce the newer, simpler default: `textContent`.

If a page genuinely needs a limited set of formatting tags, use a well-tested sanitizer with an explicit allowlist. Do not replace `innerHTML` with a handful of homemade string replacements and declare victory. The browser has more edge cases than any of us has spare afternoon for.

---

## Try it Yourself

Change the default message to `<em>Still text</em>` and run the page. Compare it with the vulnerable lesson. Here, the angle brackets remain visible because `sanitize()` converted them to HTML entities before `innerHTML` received the value.

---

## More background

See [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
