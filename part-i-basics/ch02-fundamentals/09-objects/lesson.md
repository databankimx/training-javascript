# Objects and name/value pairs

So far, we have kept each value in its own variable. That works, but related values quickly become a small crowd of names to remember. An object lets us keep related values together and give each value a meaningful name.

```javascript
const person = {
  name: "Ada",
  role: "analyst",
  contact: {
    city: "Chicago"
  }
};

console.log(person);
console.log(person.name);
console.log(person["role"]);
console.log(person.contact.city);

const jsonText = JSON.stringify(person);
console.log(jsonText);

const restoredPerson = JSON.parse(jsonText);
console.log(restoredPerson.contact.city);
```

The braces create an object. Each property has a name, a colon, and a value. Commas separate the properties. The `contact` property happens to contain another object, so we can follow the path from `person` to `contact` to `city`.

> An object groups related values together.
>
> A property is a name/value pair inside an object. Here, `name` is the name, and `"Ada"` is its value.
>
> Dot notation, such as `person.name`, reads a property when we know its name in the code.
>
> Bracket notation, such as `person["role"]`, reads a property by using a string containing its name. It is useful when the property name comes from another value or contains characters that dot notation cannot use.

Here is the practical comparison:

| Form | Example | Use it when... |
| --- | --- | --- |
| Dot notation | `person.name` | The property name is known and is a normal JavaScript identifier |
| Bracket notation | `person["role"]` | The property name comes from another value, or you need to use a name that dot notation cannot express |

```text
{ name: 'Ada', role: 'analyst', contact: { city: 'Chicago' } }
Ada
analyst
Chicago
{"name":"Ada","role":"analyst","contact":{"city":"Chicago"}}
Chicago
```

The first line prints the whole object. The next two lines read two top-level properties in different ways. The final line uses dot notation twice to read a property inside the nested `contact` object.

The nested object is worth pausing over. `person.contact.city` is not three unrelated names. It is a path through the object: start at `person`, find its `contact` property, then find `city` inside that value. We will use this same idea when data arrives from forms and web services.

---

## Objects as JSON

Objects are often sent between programs as JSON (JavaScript Object Notation), a text format that uses name/value pairs. JavaScript provides a pair of methods for the trip:

```javascript
const jsonText = JSON.stringify(person);
console.log(jsonText);

const restoredPerson = JSON.parse(jsonText);
console.log(restoredPerson.contact.city);
```

> `JSON.stringify` serializes an object by turning it into JSON text.
>
> `JSON.parse` deserializes JSON text by turning it back into a JavaScript value.
>
> Serialization is useful when data needs to cross a network connection or be saved as text. The object and the JSON text are related, but they are not the same thing.

```text
{"name":"Ada","role":"analyst","contact":{"city":"Chicago"}}
Chicago
```

JSON uses double quotes around property names and string values. After parsing, `restoredPerson` is an ordinary JavaScript object again, so we can use the same property access we used earlier.

The round trip is therefore two related but distinct operations. `JSON.stringify` prepares an object to travel or be stored as text. `JSON.parse` turns that text back into a JavaScript value we can work with. The text is not the object, even when it describes exactly the same information.

There is a bit of browser history attached to these two methods. Older browsers, especially Internet Explorer versions before 9, did not provide the native `JSON` functions. Before those browsers could be retired, developers commonly added a **shim**, a compatibility script that supplied the missing behavior. Douglas Crockford’s [JSON-js](https://github.com/douglascrockford/JSON-js) was the widely recognized implementation. Modern browsers provide `JSON.stringify` and `JSON.parse` natively, so we do not need to add that script to new code. You may still encounter it in older applications, which is why it is useful to recognize what it is doing.

This history is particularly relevant in our OnBase work. Until relatively recent versions, OnBase rendered form HTML and its scripts in an IE7 compatibility mode. Code that worked perfectly in a current browser could therefore fail inside an e-form unless the page supplied its own compatibility support. If you maintain one of those older forms, the age of the browser engine is part of the debugging context, not an interesting footnote from somebody else’s archaeology project.

---

## Try it Yourself

Create an object describing a book, a movie, or a favorite meal. Give it at least three properties, including one nested object. Print the whole object, then read one property with dot notation and one with bracket notation. Add a property whose value is a number, and check that JavaScript keeps the value as a number. Finally, serialize your object to JSON, parse it back, and print one property from the restored object.

Objects are simply named containers at this stage. We will add and change properties later, once we have more tools for making decisions about our data.

---

## More background

See [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

---
