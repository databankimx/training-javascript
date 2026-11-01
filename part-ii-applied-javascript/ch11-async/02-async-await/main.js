function loadProfile() {
  return Promise.resolve("Loaded profile");
}

async function showProfile() {
  const profile = await loadProfile();
  console.log(profile);
}

showProfile();
