const count = document.querySelector("#count");
let seconds = 0;
let intervalId = null;

document.querySelector("#start").addEventListener("click", () => {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    seconds += 1;
    count.textContent = `${seconds} second${seconds === 1 ? "" : "s"}`;
  }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
