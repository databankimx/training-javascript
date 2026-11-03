const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

async function* messages() {
  await wait(10);
  yield "first";
  await wait(10);
  yield "second";
  await wait(10);
  yield "third";
}

for await (const message of messages()) {
  console.log("received: " + message);
}
