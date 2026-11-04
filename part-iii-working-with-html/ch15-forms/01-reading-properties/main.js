const email = document.querySelector("#email");
const updates = document.querySelector("#updates");
const timezone = document.querySelector("#timezone");
const status = document.querySelector("#status");

document.querySelector("#inspect").addEventListener("click", () => {
  const contact = document.querySelector('input[name="contact"]:checked');
  status.textContent = [
    `Email: ${email.value}`,
    `Receive updates: ${updates.checked ? "on" : "off"}`,
    `Contact method: ${contact.value}`,
    `Time zone: ${timezone.value}`
  ].join("\n");
});

document.querySelector("#toggle-email").addEventListener("click", event => {
  email.disabled = !email.disabled;
  event.currentTarget.textContent = email.disabled ? "Enable email" : "Disable email";
});
