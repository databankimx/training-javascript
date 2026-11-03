const baseUrl = "https://api.example.com/v1/repositories";
const query = new URLSearchParams({
  language: "javascript",
  sort: "stars",
  limit: "10"
});

const request = {
  method: "GET",
  url: `${baseUrl}?${query}`,
  headers: {
    Accept: "application/json"
  }
};

console.log(request.method);
console.log(request.url);
console.log(request.headers.Accept);
