const request = ok => Promise.resolve({ ok, json: async () => ({ name: "Ada" }) });

async function safeRequest(ok) {
  try {
    const response = await request(ok);
    if (!response.ok) throw new Error("Request failed");
    return (await response.json()).name;
  } catch (error) {
    return error.message;
  }
}

console.log(await safeRequest(true));
console.log(await safeRequest(false));
