# Cross-site scripting: the reflected vulnerable pattern

Cross-site scripting, usually called **XSS**, happens when a page takes data it does not fully control and lets the browser interpret that data as HTML or JavaScript. The value might come from a URL, a form, a database, or an API. The source does not make it trustworthy. A value is untrusted because of what it is, not because of where it came from.

This lesson uses a URL because it makes the data path easy to see. The page reads a query-string value and writes it straight into the document:

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

The line using `innerHTML` is the vulnerable sink. A link such as this one supplies markup through the URL:

```text
https://example.test/?message=<strong>Hello</strong>
```

That is a harmless formatting example. A real attacker could send a payload such as:

```html
<script>alert("I injected JavaScript!");</script>
```

We keep the runnable default harmless so the lesson does not surprise us with an alert every time it loads. The important part is understanding that the browser has no magical way to know which markup came from the original developer and which arrived in a request.

When the value arrives in a request and is immediately repeated into the page, the attack is called **reflected XSS**. A phishing email may carry the payload in a link to a legitimate-looking site.

---

## Try it Yourself

Change the default message to `<em>Italic text</em>`, run the page, and observe that the browser creates an element. Then try a plain string and compare the result. Do not add an executable payload to the runnable example. The next lesson replaces the dangerous sink with a safe one.

---

## More background

See [MDN: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
