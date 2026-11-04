const form = document.querySelector("#appointment-form");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const status = document.querySelector("#status");

form.addEventListener("submit", event => {
  event.preventDefault();

  date.classList.remove("invalid");
  time.classList.remove("invalid");

  if (!date.value || !time.value) {
    const firstInvalid = !date.value ? date : time;
    firstInvalid.classList.add("invalid");
    status.textContent = "Choose both a date and time.";
    firstInvalid.focus();
    return;
  }

  const meeting = document.querySelector('input[name="meeting"]:checked');
  const appointment = new Date(`${date.value}T${time.value}`);
  const readable = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short"
  });

  status.textContent = `Appointment: ${readable.format(appointment)}. Type: ${meeting.value}. Reminder: ${document.querySelector("#reminder").checked ? "yes" : "no"}.`;
});
