# Testing XSS safely

We now have two useful comparisons: reflected input from a URL, and persistent input from a comments form. The final step is to test the sink itself. Give both panels the same value and ask what the browser is being told to do.

```javascript
const value = document.querySelector("#test-value");

document.querySelector("#unsafe").innerHTML = value.value;
document.querySelector("#safe").textContent = value.value;
```

```text
Input: <strong>Important</strong>
Vulnerable sink: Important (bold)
Fixed sink: <strong>Important</strong> (literal text)
```

> A **test payload** is a deliberately chosen input that helps us verify how an application handles untrusted data.
>
> A safe test payload should demonstrate the parsing difference without stealing data, changing the browser location, or harming the machine.

Start with harmless markup such as `<strong>Important</strong>` and `<em>still text</em>`. Then try the alert payload shown above. The vulnerable panel deliberately models the historical jQuery/server-rendered path, so the alert fires there. The fixed panel displays the same characters as text. Never test against a shared or production system without permission. Security testing is not a loophole in the change-control process, no matter how exciting the button looks.

The original comments-form problem is worth remembering. A tester may find a vulnerable field by entering ordinary markup, but the risk is not limited to making text bold. If an unsafe value is stored and later rendered through an HTML sink, the page may execute attacker-controlled behavior for every visitor who opens the record.

---

## Try it Yourself

Change the input to `<em>hello</em>` and render both panels. Then try plain text and compare the output. Finally, explain in your own words why moving from `innerHTML` to `textContent` changes the browser's interpretation of the same characters.

---

## More background

See [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), [MDN: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), and [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent).

---
