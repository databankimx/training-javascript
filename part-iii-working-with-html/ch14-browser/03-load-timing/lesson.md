# Script timing: `defer`, `DOMContentLoaded`, and `onload`

One of the most common causes of `null` reference errors in JavaScript running on an HTML page is simply trying to find an element before the browser has created it. The selector is correct, the spelling is fine, and the element really is in the file. The script just got there first. It is the browser equivalent of arriving at a restaurant before the building has been constructed.

Browser JavaScript needs a page to exist before it can sensibly select and update page elements. The HTML file loads the script in the `<head>` with `defer`:

```html
<script src="main.js" defer></script>
```

```javascript
const status = document.querySelector("#status");
status.textContent = "The deferred script can see the page elements.";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");
});

window.addEventListener("load", () => {
  console.log("window load fired");
});
```

```text
The deferred script can see the page elements. The window is fully loaded.
```

> `defer` lets the browser continue parsing the HTML, then runs the external script after the document has been parsed.
>
> `DOMContentLoaded` fires when the HTML has been parsed. Images and other external resources may still be loading.
>
> `window.onload` fires after the whole window, including its dependent resources, has loaded.

Older forms often contain `window.onload = function () { ... };`. That still works, but assigning the property can replace another handler. `addEventListener("load", handler)` allows multiple pieces of code to listen. For most page scripts, `defer` is the uncomplicated modern default.

---

## Try it Yourself

Move the script tag into the body, remove `defer`, and see what changes. Then restore `defer`. Add a second `load` listener and observe that both listeners can run.

---

## More background

See [MDN: defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer), [MDN: DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), and [MDN: load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).

---
