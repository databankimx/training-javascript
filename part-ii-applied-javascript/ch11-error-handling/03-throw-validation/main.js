function welcome(person) {
  if (!person.name) {
    throw new Error("Name is required");
  }
  return `Welcome, ${person.name}`;
}

for (const person of [{ name: "Ada" }, {}]) {
  try {
    console.log(welcome(person));
  } catch (error) {
    console.log(error.message);
  }
}
