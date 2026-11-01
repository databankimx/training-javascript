function runTask(shouldFail) {
  try {
    if (shouldFail) throw new Error("Task failed");
    console.log("Task succeeded");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Cleanup complete");
  }
}

runTask(false);
runTask(true);
