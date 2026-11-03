function delay(value, milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

function loadProfile() {
  return delay("Loaded profile", 30);
}

function loadSettings() {
  return delay("Loaded settings", 0);
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

async function showSettings() {
  const settings = await loadSettings();
  console.log(settings);
}

showProfile();
showSettings();
