# Solution

The runnable page uses the exact jQuery 3.7.1 SRI value published for that file:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
```

The browser checks the downloaded bytes before making jQuery available. The `crossorigin` attribute makes that cross-origin request without credentials, which is the normal pairing for a public CDN resource protected by SRI.

For the jQuery UI stylesheet, generate a hash from the exact stylesheet version and URL you intend to use. A JavaScript hash cannot be reused for CSS, and a hash from another jQuery UI release will fail the browser check.

---
