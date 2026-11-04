const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function selectTab(tab) {
  tabs.forEach(item => item.setAttribute("aria-selected", String(item === tab)));
  panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
}

tabs.forEach(tab => tab.addEventListener("click", () => selectTab(tab)));
