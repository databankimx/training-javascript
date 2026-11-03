const amount = 1234.5;

const us = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const german = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

console.log(us.format(amount));
console.log(german.format(amount));

const date = new Date("2026-01-15T12:00:00Z");
const formatDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

console.log(formatDate.format(date));
