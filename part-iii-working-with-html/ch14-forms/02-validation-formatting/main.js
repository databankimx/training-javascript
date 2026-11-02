const form = document.querySelector("#person-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  message.textContent = name ? `Welcome, ${name}` : "Name is required";
});
