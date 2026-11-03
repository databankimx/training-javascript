const form = document.querySelector("#access-form");
const requester = document.querySelector("#requester");
const message = document.querySelector("#message");
const realSubmit = document.querySelector("#real-submit");

form.addEventListener("submit", event => {
  event.preventDefault();
  message.textContent = `Submitted for ${requester.value.trim()}.`;
});

document.querySelector("#check").addEventListener("click", () => {
  const name = requester.value.trim();
  if (!name) {
    message.textContent = "Enter your name before submitting.";
    requester.focus();
    return;
  }

  message.textContent = "Validation passed. Submitting...";
  realSubmit.click();
});
