const rateLimit = {
  limit: 60,
  remaining: 42,
  resetAt: "12:30 PM"
};

const availablePercent = Math.round((rateLimit.remaining / rateLimit.limit) * 100);

console.log(`Remaining: ${rateLimit.remaining}`);
console.log(`Resets at: ${rateLimit.resetAt}`);
console.log(`${availablePercent}% available`);
