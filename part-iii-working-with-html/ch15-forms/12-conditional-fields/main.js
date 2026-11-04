const type = document.querySelector("#type");
const details = document.querySelector("#business-details");
const status = document.querySelector("#status");

type.addEventListener("change", () => {
  const business = type.value === "business";
  details.hidden = !business;
  status.textContent = `${business ? "Business" : "Personal"} account selected.`;
});
