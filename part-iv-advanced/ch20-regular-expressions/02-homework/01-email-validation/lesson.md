# Homework: validate email addresses

Email addresses are a manageable regex exercise because they have a few recognizable pieces without requiring us to reproduce the entire email standard. We will validate a whole value with a local part, an `@`, a domain, a literal period, and a top-level domain.

## Your assignment

Complete the email validation pattern in `main.js` so the program classifies every address correctly.

The pattern must:

- accept `ada@example.com`, `grace.hopper@navy.mil`, and `team+training@example.co.uk`;
- reject `ada@exampleXcom`, where the period has been replaced by another character;
- reject `missing-at.example.com`, which has no `@`;
- reject `user@example`, which has no dotted top-level domain;
- validate the entire string, not merely find an email-shaped substring inside it.

The starter program already supplies the test data and the reporting loop. Your job is to replace the placeholder pattern:

```javascript
const emailPattern = /TODO/;
```

The period is the deliberate trap. In a regex, `.` means almost any character. To require an actual period before the top-level domain, use `\.`.

Try the pattern yourself before opening the solution. Explain what each part does, especially the anchors, character class, `@`, escaped period, and `{2,}` quantifier.

## Expected output

```text
Valid: ada@example.com
Valid: grace.hopper@navy.mil
Valid: team+training@example.co.uk
Rejected: ada@exampleXcom
Rejected: missing-at.example.com
Rejected: user@example
```

---

This is intentionally a practical validation pattern, not a claim that six lines of regex can capture every rule in the email specification. Production systems often validate a reasonable shape and then confirm the address through a message or another business process.

---

## Further reading

Review the regular-expression syntax table in the previous lesson, especially `^`, `$`, character classes, `+`, `{2,}`, and `\.`.

---
