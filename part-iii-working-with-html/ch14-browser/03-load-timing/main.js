const status = document.querySelector("#status");

status.textContent = "The deferred script can see the page elements.";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");
});

window.addEventListener("load", () => {
  console.log("window load fired");
  status.textContent += " The window is fully loaded.";
});
