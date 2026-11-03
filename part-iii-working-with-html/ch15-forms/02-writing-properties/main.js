const email = document.querySelector("#email");
const updates = document.querySelector("#updates");
const save = document.querySelector("#save");
const status = document.querySelector("#status");

document.querySelector("#prepare").addEventListener("click", () => {
  email.value = "grace@example.com";
  updates.checked = true;
  save.disabled = false;
  status.textContent = "Example preferences prepared.";
});

save.addEventListener("click", () => {
  status.textContent = `Saved ${email.value} with updates ${updates.checked ? "on" : "off"}.`;
});
