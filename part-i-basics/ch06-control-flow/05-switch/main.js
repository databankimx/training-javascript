const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Weekday");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

const otherDay = "Sunday";
switch (otherDay) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

const unrecognizedDay = "Holiday";
switch (unrecognizedDay) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}
