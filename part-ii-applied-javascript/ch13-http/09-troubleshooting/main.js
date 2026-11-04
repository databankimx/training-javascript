const response = { status: 404, url: "https://api.example.com/v1/missing", body: "Not found" };

console.log(`Status: ${response.status}`);
console.log(response.body);
