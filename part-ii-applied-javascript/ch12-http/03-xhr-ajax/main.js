function legacyAjax(url, callback) {
  callback(null, { status: 200, body: "Legacy response" });
}

legacyAjax("/api/person", (error, response) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(response.body);
});
