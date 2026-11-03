# Legacy browser code: `document.write`

You will encounter `document.write()` in older pages, analytics snippets, and forms that have been around long enough to remember dial-up. It writes a string into the document while the browser is still parsing it:

```javascript
document.write('<p class="legacy">This message was written while the document was loading.</p>');

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dont-click").addEventListener("click", () => {
    document.write("<h1>Too late for document.write()</h1><p>The page was already loaded, so document.write() replaced the document.</p>");
  });
});
```

```text
This message was written while the document was loading.
```

> `document.write()` sends markup directly into the document parser.
>
> If it runs after the page has finished loading, it can replace the entire document. That is the unpleasant surprise.

The page also contains a button labeled **Don't click!**. It is there for educational mischief. When clicked, it calls `document.write()` after the page has loaded and replaces the entire document with a warning. That is the unpleasant surprise in a form-friendly, impossible-to-miss shape.

For new code, create an element and append it instead. `document.write()` is useful here because you will see it in old code, not because it is a good way to build a modern page.

---

## Try it Yourself

Change the message, then move the script below the main content and add `defer`. Observe that changing the timing changes the behavior. Restore the original script before moving on.

---

## More background

See [MDN: document.write](https://developer.mozilla.org/en-US/docs/Web/API/Document/write).

---
