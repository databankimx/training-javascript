const run = document.querySelector("#run");
const messages = document.querySelector("#messages");

run.addEventListener("click", () => {
  messages.textContent = "Import complete.";
});
