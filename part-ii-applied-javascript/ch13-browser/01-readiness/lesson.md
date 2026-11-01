# JavaScript in an HTML page

Browser JavaScript works with a document supplied by the page. The script must run after the elements it needs exist. The `defer` attribute is a simple modern default for an external script.

The browser represents the page as a **Document Object Model**, usually shortened to **DOM**. Think of it as a tree of objects: the `document` is the page, and its elements are branches and leaves we can find, read, and update. `window` is the browser window that owns the document and provides browser-wide features such as timers, the URL, and dialogs. That is why browser examples often start with `document` or `window` instead of calling a function by itself. We are asking a particular browser object to do the work.

```javascript
console.log(window.document === document);
```

```text
true
```

In ordinary page code, `document` is the useful starting point for finding HTML. `window` is available when the thing we need belongs to the browser window itself. JavaScript is not psychic, sadly, so we begin with the object that owns the feature we want.

---

```javascript
const status = document.querySelector("#status");
status.textContent = "The page is ready";
console.log(status.textContent);
```

```text
The page is ready
```

> `defer` tells the browser to download the script without blocking HTML parsing, then run it after the document has been parsed.
>
> `DOMContentLoaded` is an event that fires when the HTML document has been parsed. It is useful when the script cannot use `defer`.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("The document is ready");
});
```

The runnable page uses `defer`, so its element is available when `main.js` runs. We will use the event form when it better fits an existing page.

---

## Try it Yourself

Change the status text. Remove `defer`, then move the script to the end of `body` and explain why the timing changes.

---

## More background

See [MDN: defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer).

---
