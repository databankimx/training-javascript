# Packed state and feature flags

Permissions are not the only use for masks. A feature-flag service can store several enabled features in one value and send that value with a user profile or configuration record.

```javascript
const DARK_MODE = 1;
const BETA_SEARCH = 2;
const COMPACT_VIEW = 4;

const userFeatures = DARK_MODE | COMPACT_VIEW;

console.log("dark mode: " + Boolean(userFeatures & DARK_MODE));
console.log("beta search: " + Boolean(userFeatures & BETA_SEARCH));
console.log("compact view: " + Boolean(userFeatures & COMPACT_VIEW));
```

```text
dark mode: true
beta search: false
compact view: true
```

The packed value is still just a number. The names let us ask useful questions without exposing that implementation detail to the rest of the program. This can save space when a format is fixed, but it makes the data less self-describing. A JSON object with named Boolean properties is often easier to maintain.

> Use packed flags when the format or API calls for them, not merely because fitting three Booleans into one number feels clever. Cleverness is not free.

## Try it Yourself

Add a NOTIFICATIONS flag. Enable it for one user, leave it disabled for another, and write a function that reports both users' feature settings.

---

