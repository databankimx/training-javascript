# Solution: validate email addresses

```javascript
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
```

Expected output:

```text
Valid: ada@example.com
Valid: grace.hopper@navy.mil
Valid: team+training@example.co.uk
Rejected: ada@exampleXcom
Rejected: missing-at.example.com
Rejected: user@example
```

The anchors require the entire string to match. The first character class allows common local-part characters, `@` separates the local part from the domain, and the second character class allows domain letters, digits, periods, and hyphens. The escaped `\.` requires a real period before the final alphabetic domain suffix. Without that escape, the pattern would also accept `ada@exampleXcom`, because an unescaped period matches almost any character.

The `{2,}` quantifier requires at least two letters in the final suffix. This is a useful beginner-sized rule, but it is not a complete implementation of the email standard. Real applications usually combine reasonable shape validation with confirmation from the user.

---
