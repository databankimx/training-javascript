const form = document.querySelector("#appointment-form");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "Add date and time validation here.";
});
