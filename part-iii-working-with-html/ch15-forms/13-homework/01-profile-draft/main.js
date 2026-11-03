const form = document.querySelector("#profile-form");
const nameInput = document.querySelector("#display-name");
const timezone = document.querySelector("#timezone");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();
  nameInput.classList.remove("invalid");
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.classList.add("invalid");
    status.textContent = "Enter a display name before saving.";
    nameInput.focus();
    return;
  }

  status.textContent = `Draft saved for ${name} in ${timezone.value}.`;
});

form.addEventListener("reset", () => {
  nameInput.classList.remove("invalid");
  status.textContent = "Draft discarded.";
});
