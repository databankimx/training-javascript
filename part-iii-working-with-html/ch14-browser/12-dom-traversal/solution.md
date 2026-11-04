# Solution: traversing the DOM

```javascript
const row = button.closest("li");
row.classList.add("selected");

function describePerson(event) {
  const clickedButton = event.target.closest("button");
  if (!clickedButton || !people.contains(clickedButton)) return;

  const selectedRow = clickedButton.closest("li");
  selectedRow.classList.add("selected");
  status.textContent = `Selected: ${clickedButton.dataset.name}`;
}

people.addEventListener("click", describePerson);
people.removeEventListener("click", describePerson);
people.addEventListener("click", describePerson);
```

```text
Selected: Ada
```

`closest("li")` expresses the relationship directly and keeps working if another element is inserted inside the button. The handler is removed and re-added with the same function reference, so the list ends with one subscription rather than accumulating duplicates.

---
