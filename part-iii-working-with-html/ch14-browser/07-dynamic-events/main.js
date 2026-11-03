const items = document.querySelector("#items");
const status = document.querySelector("#status");

document.querySelector("#add").addEventListener("click", () => {
  const text = document.querySelector("#item").value.trim();
  if (!text) return;

  const item = document.createElement("li");
  item.textContent = text;
  items.append(item);
  document.querySelector("#item").value = "";
});

items.addEventListener("click", event => {
  if (event.target.matches("li")) status.textContent = `Selected: ${event.target.textContent}`;
});
