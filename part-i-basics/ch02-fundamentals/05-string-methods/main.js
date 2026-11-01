const name = "Ada";
const total = 1234.5;

// Finding and replacing text
console.log(name.includes("da"));
console.log(name.replace("Ada", "Grace"));

// Padding text for alignment
const hours = "9";
const minutes = "15";
console.log(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`);
console.log("42".padEnd(6, "*"));

// Formatting a number for people
const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
console.log(formatter.format(total));

// Console format placeholders
console.log("Error code: %d - %s", 500, "Internal Server Error");
