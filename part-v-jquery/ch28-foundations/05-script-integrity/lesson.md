# Script integrity and cross-origin loading

Loading a library from a CDN is convenient. It also means that our page is trusting a file we did not serve ourselves. `integrity` gives the browser a way to check that the bytes it downloaded are the bytes we intended to load.

---

## The two attributes

Here is the important part of the page:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
```

`integrity` contains a cryptographic hash of the exact file. The browser hashes the response and compares the result with the value in the page. If the values do not match, the browser refuses to use the resource. A changed file therefore fails closed instead of quietly becoming a different dependency.

`crossorigin="anonymous"` tells the browser to make a cross-origin request without sending credentials. That gives the browser the response it needs to perform the integrity check without sharing cookies or other credentials with the CDN.

> **Subresource Integrity (SRI)** is the browser feature behind the `integrity` attribute. It protects a script or stylesheet from unexpected changes after we have published the page.
>
> **Cross-origin** means that the resource comes from a different scheme, host, or port. A page on our server and a library on `code.jquery.com` are different origins.

---

## What the hash covers

The hash is tied to the exact bytes at the exact URL. These are different resources as far as SRI is concerned:

| Change | Why it matters |
| --- | --- |
| `jquery-3.7.1.min.js` becomes `jquery-3.7.2.min.js` | A new version has different bytes and needs its own hash. |
| The URL changes from minified to unminified JavaScript | The content is different even if the behavior is similar. |
| A query string or CDN transformation changes the response | The response bytes may no longer match the published hash. |
| We copy the hash from a script onto a stylesheet | A script hash cannot validate CSS. Each resource needs its own hash. |

The capstone uses an integrity value for its jQuery UI script. Its stylesheet is deliberately left without a guessed value here. A stylesheet hash must be generated from the exact `jquery-ui.css` response we plan to deploy. Copying a hash from another UI version would make the browser reject the stylesheet, which is a wonderfully secure way to make a date picker disappear.

To generate a hash after downloading the exact file, use a trusted local tool. For example, PowerShell can hash a local file, and OpenSSL can convert the digest to the Base64 form used by SRI:

```text
openssl dgst -sha256 -binary jquery-ui.css | openssl base64 -A
```

Prefix the result with `sha256-`, then test the page in a browser. If the stylesheet fails to load, check the browser console for an integrity error rather than removing the attribute blindly.

---

## See it run

The runnable page uses the protected jQuery script. Click the button and look at the console as well as the page:

```javascript
$(function () {
    $("#check").on("click", function () {
        $("#status").text("jQuery loaded and the integrity-protected script is running.");
        console.log("jQuery version:", $.fn.jquery);
    });
});
```

The output is:

```text
jQuery loaded and the integrity-protected script is running.
jQuery version: 3.7.1
```

The page itself does not calculate the hash. The browser checks the resource before our code can use `$`, so a failed check normally appears as a resource-loading error in the browser console.

---

## Try it Yourself

Change one character in the jQuery hash, then reload the page. The button should stop working because the browser rejects the script. Restore the correct hash and try again. This is a useful failure to see once, preferably while we still know exactly what we broke.

---

## More Background

- [MDN: Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- [jQuery CDN](https://releases.jquery.com/)
- [jQuery UI downloads](https://jqueryui.com/download/all/)

---
