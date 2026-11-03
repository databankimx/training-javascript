function fetchPerson() {
  return Promise.resolve({ ok: true, json: async () => ({ name: "Ada" }) });
}

const response = await fetchPerson();
if (!response.ok) throw new Error("Request failed");
const person = await response.json();
console.log(person.name);
