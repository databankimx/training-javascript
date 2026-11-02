const form = document.querySelector("#search-form");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = `Searching for ${document.querySelector("#term").value}.`;
});

form.addEventListener("reset", () => {
  status.textContent = "Search settings reset.";
});
