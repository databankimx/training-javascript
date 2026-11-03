# Persistent XSS: the vulnerable comments form

The reflected example lasted only as long as the crafted URL. Real forms often have a more troublesome version: a comments field, notes field, or description is saved and rendered again later. If the saved value is treated as HTML, the attack becomes **persistent**, or **stored**, XSS.

This is not an invented classroom contrivance. Historical forms delivered by non-developers often collected a comment, appended it to an existing block of HTML, and saved the result. The construction is simple, familiar, and dangerous. Your original example uses jQuery's `.html()` path, so its behavior is the model here. The small vanilla-JavaScript rehydration block below stands in for the fresh server-rendered HTML response that the older form effectively produced.

```javascript
const storageKey = "training-xss-comments";
const comments = document.querySelector("#comments");
const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");

function render() {
    comments.innerHTML = stored
        .map(comment => `<p class="comment">${comment}</p>`)
        .join("");

    // Deliberately unsafe: this simulates a server-rendered response.
    comments.querySelectorAll("script").forEach(script => {
        const executable = document.createElement("script");
        executable.textContent = script.textContent;
        script.replaceWith(executable);
    });
}

document.querySelector("#save").addEventListener("click", () => {
    const value = document.querySelector("#comment").value;
    if (value.trim()) {
        stored.push(value);
        localStorage.setItem(storageKey, JSON.stringify(stored));
        render();
    }
});
```

```text
Save a comment, reload the page, and the comment appears again.
```

> **Persistent XSS** is untrusted input that is saved and later rendered as executable page content.
>
> `localStorage` is standing in for a database here. A real application might save the comment on a server and return it to every visitor.
>
> A **sink** is the operation where data enters the DOM. Here, `innerHTML` is the dangerous sink.

The value is unsafe twice: it is written to the page through `innerHTML`, and it is saved so the same value can come back later. A payload such as this is the kind of string an attacker may try in a vulnerable comments field:

```html
<script>alert("I injected JavaScript!");</script>
```

There is a browser wrinkle here. A `script` element inserted through `innerHTML` is normally inert, which is why the first version of this demo saved a blank-looking comment without showing an alert. The deliberately unsafe rehydration code above simulates what happens when a server puts the saved value into a fresh HTML response, where the script tag is parsed as page markup. Event-handler attributes such as an image `onerror` can execute through other HTML-interpreting paths as well. That is why “we tested one script tag” is not a security strategy. The real rule is simpler: do not send untrusted comments to an HTML-interpreting sink.

---

## Try it Yourself

Save an ordinary comment, reload the page, and confirm that it persists. Then save `<strong>Important</strong>` and observe that the browser creates formatting. Finally, save `<script>alert("I injected JavaScript!");</script>` and reload. The vulnerable demo will display the alert again because the stored script is deliberately rehydrated. Clear the comments when you are finished.

Do not test with a destructive payload. The goal is to identify the unsafe construction and understand why persistence increases the audience of the mistake.

---

## More background

See [OWASP: Stored XSS](https://owasp.org/www-community/attacks/xss/) and [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

---
