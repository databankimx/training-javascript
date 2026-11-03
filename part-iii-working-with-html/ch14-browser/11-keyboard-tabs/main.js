const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

tabs[0]?.focus();

function selectTab(tab) {
  tabs.forEach(item => item.setAttribute("aria-selected", String(item === tab)));
  panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    next.focus();
    selectTab(next);
  });
});
