const form = document.querySelector("#profile-form");
const nameInput = document.querySelector("#display-name");
const timezone = document.querySelector("#timezone");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = `Draft saved for ${nameInput.value.trim() || "Unnamed user"} in ${timezone.value}.`;
});

form.addEventListener("reset", () => {
  status.textContent = "Draft discarded.";
});
