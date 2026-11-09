# What is jQuery?

If you work on older web applications, especially the sort of forms that have been quietly doing their jobs for years, you will meet jQuery. It is a JavaScript library that gives us a compact, consistent way to select elements, handle events, and update a page.

That does not make vanilla JavaScript obsolete. The browser already provides the underlying APIs, and modern JavaScript can do many of the same jobs without a library. jQuery became popular because browsers used to disagree more often, and because a short jQuery expression could replace a surprising amount of repetitive code.

This part of the tutorial is about reading and maintaining that code. We will write jQuery deliberately, compare it with the vanilla JavaScript equivalent, and point out where the older pattern still appears in real systems.

---

## The same page, two styles

The example changes one paragraph with vanilla JavaScript and another with jQuery.

```javascript
const message = document.querySelector("#message");
message.textContent = "This sentence was changed with vanilla JavaScript.";

$("#comparison").text("This sentence was changed with jQuery.");
```

`document.querySelector("#message")` asks the browser for the element whose `id` is `message`. We then assign to its `textContent` property.

`$("#comparison")` uses jQuery's `$` function. The selector looks familiar because jQuery uses CSS selector syntax. The result is a jQuery object, and `.text(...)` updates the text inside the matched element.

```text
This sentence was changed with vanilla JavaScript.
This sentence was changed with jQuery.
```

> **jQuery** is a JavaScript library. It is not a second language, and `$` is not magic. `$` is simply the short function name that jQuery provides for creating a jQuery object from a selector or element.

The library is loaded in the `<head>` before our own script. In a real application, that might be a local copy, a bundled dependency, or a Content Delivery Network URL. The important part is the dependency order: code that calls `$` must run after jQuery has loaded.

---

## Try it Yourself

Change both messages. Keep the first update in vanilla JavaScript and the second in jQuery. Then add a third paragraph and update it with whichever style you prefer.

Open the console after running the page. The output should explain that both approaches updated the page. If `$` is not defined, check the script order before blaming the punctuation. It has had a difficult enough career already.

Believe it or not, you have now read your first jQuery program. The rest is mostly learning which shortcuts are useful and which ones make future maintenance interesting in the least flattering sense.

---

## More Background

- [jQuery API documentation](https://api.jquery.com/)
- [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [jQuery 3.7.1](https://releases.jquery.com/jquery/)

---
