const responseData = {
  totalCount: 2,
  incompleteResults: false,
  items: [
    { name: "Ada", owner: { login: "ada-lovelace" }, stars: 120 },
    { name: "Grace", owner: { login: "grace-hopper" }, stars: 95 }
  ]
};

const first = responseData.items[0];

console.log(`Total matches: ${responseData.totalCount}`);
console.log(`Complete results: ${!responseData.incompleteResults}`);
console.log(`Name: ${first.name}`);
console.log(`Owner: ${first.owner.login}`);
console.log(`Stars: ${first.stars}`);
