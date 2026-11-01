function connect() {
  return Promise.reject(new Error("Could not connect"));
}

async function start() {
  try {
    await connect();
  } catch (error) {
    console.log(error.message);
  }
}

start();
