# Inspecting JSON response data

Receiving a response is only the midpoint of an API call. The useful information is usually inside the JSON body, and the body often contains metadata alongside an array of records. Before we write a large loop, it is worth inspecting the shape of one response so we know which properties actually exist.

```javascript
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
```

In a real `fetch` call, this object would come from `await response.json()`. The runnable example uses a local object so you can concentrate on the data shape instead of depending on a live service.

> JSON objects become JavaScript objects after parsing.
>
> `items[0]` selects the first record in an array.
>
> `first.owner.login` walks through nested objects to reach the owner’s login name.

```text
Total matches: 2
Complete results: true
Name: Ada
Owner: ada-lovelace
Stars: 120
```

`totalCount` tells us how many records matched the search, while `items` contains the records returned in this page. Those numbers are not always the same. A service may match hundreds of records but return only the first page.

## Try it Yourself

Print the second record’s name, owner, and stars. Add a nested `description` property and print it. Then remove the property and observe why real API clients need to consider missing fields.

## More background

See [MDN: Response.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) and [MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON).

---
