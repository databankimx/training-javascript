const instant = new Date("2026-01-15T02:30:00Z");

const format = timeZone => new Intl.DateTimeFormat("en-US", {
  timeZone,
  dateStyle: "full",
  timeStyle: "short"
}).format(instant);

console.log("Chicago: " + format("America/Chicago"));
console.log("Tokyo: " + format("Asia/Tokyo"));
