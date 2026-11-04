const message = document.querySelector("#message");
const toggle = document.querySelector("#toggle");
const state = document.querySelector("#state");

toggle.addEventListener("click", () => {
  const highlighted = message.classList.toggle("highlighted");
  message.textContent = highlighted ? "A highlighted message" : "A plain message";
  toggle.textContent = highlighted ? "Remove highlight" : "Highlight message";
  state.textContent = highlighted ? "The message is highlighted." : "The message is plain.";
});
