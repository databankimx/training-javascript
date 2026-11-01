# XSS: the vulnerable pattern

Cross-site scripting, usually called **XSS**, happens when a page treats data from outside the page as HTML or JavaScript. The data might come from a form, a URL, a database, or an API. The source does not make it trustworthy.

This demo reads a message from the query string. If there is no query string, it uses a harmless default so the page has something to show:

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

document.querySelector("#message").innerHTML = message;
```

```text
The page displays Safe-looking markup in bold.
```

> `URLSearchParams` reads the name-and-value pairs after the `?` in a URL.
>
> `innerHTML` asks the browser to parse a string as HTML and add the resulting elements to the DOM.
>
> **Untrusted input** is any value that came from a user or another system and has not been deliberately treated as safe for its destination.

The line using `innerHTML` is the problem. A link such as this one supplies markup through the URL:

```text
https://example.test/?message=<strong>Hello</strong>
```

That is a simple formatting example. An attacker could use a payload containing an event handler or script instead. We will not put an executable payload in the runnable page, because demonstrating the mistake does not require making the page actively unpleasant.

When the value comes in through a link and is immediately reflected onto the page, the attack is called **reflected XSS**. If the value is saved and rendered for later visitors, it is called **persistent**, or **stored**, XSS. Both rely on the same mistake: an unsafe value reaches an HTML-interpreting sink.

---

## Try it Yourself

Change the default message to `<em>Italic text</em>`, run the page, and observe that the browser creates an element. Then try a plain string and compare the result.

Do not add an executable script payload to the runnable example. The next lesson replaces the dangerous sink with a safe one.

---

## More background

See [MDN: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
