function readSettings(text) {
  return JSON.parse(text);
}

for (const text of ['{"theme":"dark"}', '{"theme":']) {
  try {
    const settings = readSettings(text);
    console.log(`Theme: ${settings.theme}`);
  } catch (error) {
    console.log(`Could not read settings: ${error.name}`);
  } finally {
    console.log("Attempt complete");
  }
}
