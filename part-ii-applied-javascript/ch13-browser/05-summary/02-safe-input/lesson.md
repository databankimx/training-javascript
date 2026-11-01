# Homework: safe input and XSS

Forms accept text from people, and people are wonderfully creative about entering text that nobody expected. The important question is what the browser should do with that text when we display it again.

If we insert input with `innerHTML`, the browser treats the value as markup:

```javascript
const entry = document.querySelector("#entry");
const output = document.querySelector("#output");

output.innerHTML = entry.value;
```

```text
Input: <strong>Important</strong>
Output: Important (bold text)
```

That may look useful, but it gives the input permission to become part of the page. An attacker could submit markup containing a script, an event handler, or a dangerous link. A stored comment, profile field, or form response could then run code for every person who views it. That family of attacks is called **cross-site scripting**, usually shortened to **XSS**.

The safer default is `textContent`:

```javascript
const entry = document.querySelector("#entry");
const output = document.querySelector("#output");

output.textContent = entry.value;
```

```text
Input: <strong>Important</strong>
Output: <strong>Important</strong> (shown as ordinary text)
```

> `innerHTML` parses a string as HTML and inserts the resulting elements.
>
> `textContent` inserts a string as text. Characters such as `<` and `>` do not become tags.
>
> Cross-site scripting, or XSS, is an attack in which untrusted input is interpreted as executable page content.

The runnable page uses `textContent`, so the safe test string appears literally. We are deliberately not putting an executable attack payload in the runnable example. The point is to understand the dangerous sink, then use a safe replacement in real code.

The same mistake can happen with data that did not come from a form. A query string is input too:

```javascript
const params = new URLSearchParams(window.location.search);
const message = params.get("message");

// Vulnerable: the URL value becomes page markup.
document.querySelector("#output").innerHTML = message;
```

```text
https://example.test/?message=<strong>Hello</strong>
Output: Hello (bold text)
```

That is **reflected XSS**. The malicious value travels in a link and the page reflects it into the DOM. A related form of attack is **persistent, or stored, XSS**, where the unsafe value is saved in a database or browser storage and rendered again for every later visitor. The source of the value changes, but the dangerous sink is the same: untrusted data is being interpreted as page content.

```javascript
// Fixed: the same URL value stays text.
document.querySelector("#output").textContent = message;
```

```text
Output: <strong>Hello</strong> (literal text)
```

If a page genuinely needs to allow a small, carefully defined set of formatting tags, it should use a well-tested sanitizer with an allowlist. Hand-rolling a few replacements is easy to get wrong. If the goal is simply to display what someone typed, `textContent` is the cleaner and safer answer.

---

## Try it Yourself

Start with the safe version and enter each of these values:

- `<strong>not markup</strong>`
- `<em>still text</em>`
- `&lt;img src=x onerror=alert('XSS')&gt;`

The output should display the characters rather than creating an element or running code. Then, in a temporary copy of the handler, replace `textContent` with `innerHTML` and try only the harmless formatting examples. Observe that the first two become real HTML. Restore `textContent` when you are finished.

Use **Show example (spoiler)** after testing.

---

## More background

See [MDN: Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), [MDN: Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), and [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

---
