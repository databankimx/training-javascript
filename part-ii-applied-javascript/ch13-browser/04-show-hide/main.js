const toggle = document.querySelector("#toggle-details");
const details = document.querySelector("#details");
const status = document.querySelector("#status");
const ready = document.querySelector("#ready");

toggle.addEventListener("click", () => {
  details.hidden = !details.hidden;
  toggle.textContent = details.hidden ? "Show details" : "Hide details";
  status.textContent = details.hidden
    ? "Details are hidden."
    : "Details are visible.";
});

ready.addEventListener("click", () => {
  status.textContent = "Ready for the next lesson.";
});
