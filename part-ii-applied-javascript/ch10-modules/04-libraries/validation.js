export function isCompletePerson(person) {
  return Boolean(person.name?.trim() && person.email?.includes("@"));
}
