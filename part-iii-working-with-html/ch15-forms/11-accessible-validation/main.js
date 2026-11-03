const form = document.querySelector("#profile-form");
const nameInput = document.querySelector("#display-name");
const error = document.querySelector("#name-error");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();
  const invalid = nameInput.value.trim() === "";
  nameInput.classList.toggle("invalid", invalid);
  nameInput.setAttribute("aria-invalid", String(invalid));
  error.textContent = invalid ? "Display name is required." : "";
  status.textContent = invalid ? "The profile has an error." : `Profile saved for ${nameInput.value.trim()}.`;
  if (invalid) nameInput.focus();
});
