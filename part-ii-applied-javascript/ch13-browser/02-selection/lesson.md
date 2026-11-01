# Selecting elements and safe text

The DOM is the browser's object model for the page. Select an element, then change its text or properties through JavaScript.

```javascript
const message = document.querySelector("#message");
message.textContent = "Text inserted safely";
```

```text
Text inserted safely
```

> `document.querySelector` returns the first element matching a CSS selector.
>
> `textContent` changes text. It does not interpret the value as HTML, which makes it the safer default for user-supplied text.

Existing forms use several selector styles. These are all worth recognizing:

```javascript
document.getElementById("message");       // one id
document.getElementsByName("email");     // controls by name
document.getElementsByTagName("input");  // every input element
document.getElementsByClassName("field"); // elements with a class
document.querySelector(".field");         // first CSS match
document.querySelectorAll("form input");  // all CSS matches
```

`getElementById` is older than `querySelector`, but it remains common in existing applications and is perfectly useful when an element has a unique id.

For example, `message.textContent = userInput` displays angle brackets as text rather than creating markup. Use `innerHTML` only when the HTML is trusted or has been built with careful sanitization.

---

## Try it Yourself

Add an input and a button. When the button is clicked, copy the input's value into the message with `textContent`.

---

## More background

See [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

---
