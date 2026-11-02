## Solution

```javascript
const weightInput = document.querySelector("#weight");
const speed = document.querySelector("#speed");
const status = document.querySelector("#status");

document.querySelector("#estimate").addEventListener("click", () => {
  weightInput.classList.remove("invalid");
  const weight = Number(weightInput.value);
  if (!Number.isFinite(weight) || weight < 0) {
    weightInput.classList.add("invalid");
    status.textContent = "Enter a non-negative weight.";
    weightInput.focus();
    return;
  }

  const total = Number(speed.value) + weight * 2;
  status.textContent = `${speed.options[speed.selectedIndex].text}: $${total.toFixed(2)}`;
});
```

The selected option supplies the base price. The weight adds a per-unit charge, and the result is formatted only after validation succeeds.

```text
Ground, 2 kg: $9.00
```

---
