const settings = { retries: 0, user: null };
console.log(settings.retries || 3);
console.log(settings.retries ?? 3);
console.log(settings.user?.name ?? 'Guest');
console.log(5 === '5');
