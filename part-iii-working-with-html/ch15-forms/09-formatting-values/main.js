const amount = document.querySelector("#amount");
const summary = document.querySelector("#summary");
const date = new Date("2026-11-02T14:30:00");

function classicCurrency(value) {
  return "$" + value.toFixed(2);
}

function classicDate(value) {
  const month = value.toLocaleString("en-US", { month: "long" });
  return `${month} ${value.getDate()}, ${value.getFullYear()} at ${value.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
}

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const readableDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeStyle: "short" });
const value = Number(amount.value);
summary.textContent = [
  `Classic: ${classicCurrency(value)}; ${classicDate(date)}.`,
  `Modern: ${money.format(value)}; ${readableDate.format(date)}.`
].join("\n");
