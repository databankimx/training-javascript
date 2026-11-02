const storageKey = "training-xss-comments";
const comments = document.querySelector("#comments");
const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
function render() {
  comments.innerHTML = stored
    .map(comment => `<p class="comment">${comment}</p>`)
    .join("");
  // Deliberately unsafe: simulate a server-rendered response so script tags
  // in stored comments execute when the page is rendered again.
  comments.querySelectorAll("script").forEach(script => {
    const executable = document.createElement("script");
    executable.textContent = script.textContent;
    script.replaceWith(executable);
  });
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
