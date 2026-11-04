const person = { name: "Ada", role: "analyst" };

for (const propertyName in person) {
  console.log(propertyName, person[propertyName]);
}
