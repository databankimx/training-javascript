const notices = document.querySelector("#notices");
const addButton = document.querySelector("#add-notice");

addButton.addEventListener("click", () => {
  const notice = document.createElement("article");
  const heading = document.createElement("h2");
  const detail = document.createElement("p");

  heading.textContent = "Backup complete";
  detail.textContent = "The nightly backup finished without errors.";
  notice.append(heading, detail);
  notices.append(notice);
});
