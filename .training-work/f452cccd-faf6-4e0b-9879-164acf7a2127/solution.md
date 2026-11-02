# Solution

One complete solution is:

```javascript
const DARK = 1 << 0;
const COMPACT = 1 << 1;
const BETA = 1 << 2;
const NOTIFICATIONS = 1 << 3;

let settings = DARK | COMPACT;

console.log("dark: " + Boolean(settings & DARK));
console.log("compact: " + Boolean(settings & COMPACT));
console.log("beta: " + Boolean(settings & BETA));

settings |= BETA;
settings &= ~COMPACT;

console.log("after changes: " + settings);
console.log("binary: " + settings.toString(2).padStart(4, "0"));

settings |= NOTIFICATIONS;
console.log("notifications: " + Boolean(settings & NOTIFICATIONS));
```

```text
dark: true
compact: true
beta: false
after changes: 5
binary: 0101
notifications: true
```

The initial value combines DARK and COMPACT, so both tests are true and BETA is false. OR grants BETA, changing the value from `0011` to `0111`. AND with the complemented COMPACT mask clears only COMPACT, leaving DARK and BETA set, or `0101` in binary. The optional fourth feature demonstrates that the same mask can grow without changing the earlier flags.

---
