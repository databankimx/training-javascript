function loadSettings() {
  return Promise.resolve("Loaded settings");
}

loadSettings().then(message => console.log(message));
