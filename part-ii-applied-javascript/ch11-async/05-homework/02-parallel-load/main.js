const settings = Promise.resolve("settings");
const notifications = Promise.resolve("notifications");

async function load() {
  const results = await Promise.all([settings, notifications]);
  for (const result of results) console.log(result);
}

load();
