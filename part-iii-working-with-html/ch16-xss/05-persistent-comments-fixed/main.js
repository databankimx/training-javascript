const storageKey = "training-xss-comments-fixed";
const comments = document.querySelector("#comments");
const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
function render() {
  comments.innerHTML = stored
    .map(comment => `<p class="comment">${sanitize(comment)}</p>`)
    .join("");
}

function sanitize(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

document.querySelector("#save").addEventListener("click", () => {
  const value = document.querySelector("#comment").value;

  if (!value.trim()) return;

  stored.push(value);
  localStorage.setItem(storageKey, JSON.stringify(stored));
  document.querySelector("#comment").value = "";
  render();
});

document.querySelector("#clear").addEventListener("click", () => {
  stored.length = 0;
  localStorage.removeItem(storageKey);
  render();
});

render();
