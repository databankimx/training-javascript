const people = document.querySelector("#people");
const status = document.querySelector("#status");

function describePerson(event) {
  const button = event.target.closest("button");
  if (!button || !people.contains(button)) return;

  const row = button.parentElement;
  const buttonsInList = people.querySelectorAll("button");
  let childCount = 0;

  row.parentElement.querySelectorAll(":scope > li").forEach(() => {
    childCount += 1;
  });

  status.textContent = `Selected: ${button.dataset.name}; Parent: ${row.parentElement.id}; Children: ${childCount}`;
  console.log(status.textContent);
  console.log(`Buttons in list: ${buttonsInList.length}`);
}

people.addEventListener("click", describePerson);

// Removing a handler requires the same function reference used to add it.
function temporaryNotice() {
  console.log("Temporary notice");
}

people.addEventListener("click", temporaryNotice);
people.removeEventListener("click", temporaryNotice);
