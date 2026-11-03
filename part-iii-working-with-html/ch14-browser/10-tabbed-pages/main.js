const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const selected = document.querySelector("#selected");

function selectTab(tab) {
  const panelId = tab.getAttribute("aria-controls");

  tabs.forEach(item => {
    item.setAttribute("aria-selected", String(item === tab));
  });

  panels.forEach(panel => {
    panel.hidden = panel.id !== panelId;
  });

  selected.textContent = `Selected tab: ${tab.textContent}`;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => selectTab(tab));
});
