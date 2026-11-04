const storageKey = "training-xss-comments-text";
const comments = document.querySelector("#comments");
const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");

function render() {
  const nodes = stored.map(comment => {
    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.textContent = comment;
    return paragraph;
  });

  comments.replaceChildren(...nodes);
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
