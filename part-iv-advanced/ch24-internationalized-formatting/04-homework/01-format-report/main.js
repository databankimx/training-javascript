const total = 59.97;
const itemCount = 3;
const orderDate = new Date("2026-01-15T12:00:00Z");

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
const plural = new Intl.PluralRules("en-US");
const date = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

console.log(money.format(total));
console.log(itemCount + " " + (plural.select(itemCount) === "one" ? "item" : "items"));
console.log(date.format(orderDate));
