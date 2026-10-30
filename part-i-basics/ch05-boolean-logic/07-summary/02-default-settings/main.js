const settings = { retries: 0, user: null, darkMode: false };

console.log(settings.retries ?? 3);
console.log(settings.user?.name ?? "Guest");
console.log(settings.darkMode === true);
