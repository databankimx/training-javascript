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
