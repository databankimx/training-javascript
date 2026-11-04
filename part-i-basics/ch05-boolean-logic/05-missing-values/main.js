const settings = { retries: 0, user: { name: "Ada" } };
const missingUser = null;

console.log(settings.retries || 3);
console.log(settings.retries ?? 3);
console.log(missingUser?.name ?? "Guest");
console.log(settings.user?.name ?? "Guest");
