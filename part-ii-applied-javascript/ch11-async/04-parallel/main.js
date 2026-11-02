function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

const settings = delay("settings", 30);
const profile = delay("profile", 0);

async function loadPageData() {
  const results = await Promise.all([settings, profile]);
  for (const result of results) {
    console.log(result);
  }
}

loadPageData();
