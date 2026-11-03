document.querySelectorAll(".heading").forEach(button => {
  button.addEventListener("click", () => {
    const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});
