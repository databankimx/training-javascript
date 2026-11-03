# Selecting elements and safe text

The DOM is the browser's object model for the page. Select an element, then change its text or properties through JavaScript. This is where the language stops being a console exercise and starts rearranging the page in front of the user.

Here is a small page with the sort of attributes selectors use:

```html
<main>
  <p id="message" class="notice"></p>
  <label for="email">Email</label>
  <input id="email" name="email" class="field" type="email">
  <input name="backupEmail" class="field" type="email">
</main>
```

The complete document puts the stylesheet link and deferred script in the `head`, as in the previous lesson. The `id`, `name`, and `class` values are not decoration. They are handles that let JavaScript find the elements.

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
document.getElementById("message");        // one id
document.getElementsByName("email");       // controls by name
document.getElementsByTagName("input");    // every input element
document.getElementsByClassName("field");  // elements with a class
document.querySelector(".field");          // first CSS match
document.querySelectorAll("form input");   // all CSS matches
```

Here is the same information in a form we can scan without squinting:

| Method | What it matches | What it returns |
| --- | --- | --- |
| `querySelector(".field")` | The first element matching a CSS selector | One element, or `null` |
| `querySelector("#message")` | The first element with the matching `id` | One element, or `null` |
| `querySelector('input[name="email"]')` | The first element with the matching attribute | One element, or `null` |
| `querySelector("form input")` | The first matching descendant element | One element, or `null` |
| `querySelectorAll(".field")` | Every element matching a CSS selector | A static `NodeList` |
| `querySelectorAll("input")` | Every `<input>` element | A static `NodeList` |
| `querySelectorAll('input[name="email"]')` | Every matching named control | A static `NodeList` |
| `querySelectorAll("form input")` | Every matching descendant control | A static `NodeList` |

The CSS-selector methods are the flexible general-purpose tools. They can select by id (`#message`), class (`.field`), tag (`input`), attribute (`input[name="email"]`), relationship (`form input`), or combinations (`input.field[type="email"]`).

```javascript
const message = document.querySelector("#message");
const fields = document.querySelectorAll("input.field");
const emailFields = document.querySelectorAll('input[name="email"]');
```

> A **live collection** updates as the page changes. A **static `NodeList`** represents the matches from the moment `querySelectorAll()` ran.

That difference matters when we add elements later. A live collection may grow underneath your code, while a static list will not magically include new matches. JavaScript has opinions about time, apparently.

`getElementById` is older than `querySelector`, but it remains common in existing applications and is perfectly useful when an element has a unique id.

For example, `message.textContent = userInput` displays angle brackets as text rather than creating markup. Use `innerHTML` only when the HTML is trusted or has been built with careful sanitization. “It came from our own database” is not automatically the same as “it is safe”; databases are very good at remembering bad decisions.

---

## Try it Yourself

Add an input and a button. When the button is clicked, copy the input's value into the message with `textContent`.

---

## More background

See [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

---
