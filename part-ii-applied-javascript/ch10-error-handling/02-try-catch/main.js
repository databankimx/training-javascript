function readSettings() {
  throw new Error("Could not read settings");
}

try {
  readSettings();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup complete");
}
