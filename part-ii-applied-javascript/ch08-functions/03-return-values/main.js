function add(left, right) {
  return left + right;
}

const total = add(3, 4);
console.log(`Total: ${total}`);

function buildPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age
  };
}

const person = buildPerson("Ada", "Lovelace", 36);
console.log(person.firstName);
console.log(person.age);

function percentage(part, whole) {
  if (whole === 0) {
    return null;
  }

  return part / whole * 100;
}

console.log(percentage(2, 4));
console.log(percentage(2, 0));
