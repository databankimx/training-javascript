const message = document.querySelector("#message");

function showMessage(text) {
  message.textContent = text;
}

document.querySelector("#bound-button").addEventListener("click", () => {
  showMessage("bound click");
});

document.querySelector("#bound-input").addEventListener("focus", () => showMessage("bound focus"));
document.querySelector("#bound-input").addEventListener("blur", () => showMessage("bound blur"));
document.querySelector("#bound-select").addEventListener("change", () => showMessage("bound change"));
