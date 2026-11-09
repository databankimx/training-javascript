const names = ["Ada", "Grace", "Alan"];
const list = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
const count = 3;
const plural = new Intl.PluralRules("en-US");
const speed = new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "kilometer-per-hour",
  unitDisplay: "long"
});
const relative = new Intl.RelativeTimeFormat("en-US", { numeric: "always" });

console.log(list.format(names));
console.log(count + " " + (plural.select(count) === "one" ? "item" : "items"));
console.log(speed.format(88));
console.log(relative.format(2, "day"));
