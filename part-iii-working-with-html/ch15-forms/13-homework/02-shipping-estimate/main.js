const weightInput = document.querySelector("#weight");
const speed = document.querySelector("#speed");
const status = document.querySelector("#status");

function updateEstimate() {
  weightInput.classList.remove("invalid");
  const weight = Number(weightInput.value);

  if (!Number.isFinite(weight) || weight < 0) {
    weightInput.classList.add("invalid");
    status.textContent = "Enter a non-negative weight.";
    weightInput.focus();
    return;
  }

  const total = Number(speed.value) + weight * 2;
  const label = speed.options[speed.selectedIndex].textContent;
  status.textContent = `${label}, ${weight} kg: $${total.toFixed(2)}`;
}

document.querySelector("#estimate").addEventListener("click", updateEstimate);
speed.addEventListener("change", updateEstimate);
