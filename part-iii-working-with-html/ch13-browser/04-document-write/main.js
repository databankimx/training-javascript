document.write('<p class="legacy">This message was written while the document was loading.</p>');

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#dont-click").addEventListener("click", () => {
    document.write("<h1>Too late for document.write()</h1><p>The page was already loaded, so document.write() replaced the document. This is why new code should create elements and append them instead.</p>");
  });
});
