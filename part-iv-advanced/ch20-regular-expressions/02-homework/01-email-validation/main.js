const addresses = [
  "ada@example.com",
  "grace.hopper@navy.mil",
  "team+training@example.co.uk",
  "ada@exampleXcom",
  "missing-at.example.com",
  "user@example"
];

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

for (const address of addresses) {
  const label = emailPattern.test(address) ? "Valid" : "Rejected";
  console.log(`${label}: ${address}`);
}
