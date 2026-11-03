## Solution

```javascript
document.write('<p class="legacy">This message was written while the document was loading.</p>');

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dont-click").addEventListener("click", () => {
    document.write("<h1>Too late for document.write()</h1><p>The page was already loaded, so document.write() replaced the document.</p>");
  });
});
```

```text
The message appears during document parsing.
```

The first call works because the script runs while the browser is parsing the document. The button demonstrates the dangerous case: once the page is loaded, `document.write()` replaces the document. That timing dependency is exactly why it is a legacy technique rather than a recommendation.

---
