# Objects and name/value pairs

So far, we have kept each value in its own variable. That works for a tiny example, but a real record quickly becomes a small crowd of names to remember. An object lets us keep related values together and give each value a meaningful name.

```javascript
const person = {
  name: "Ada",
  role: "analyst",
  contact: {
    city: "Chicago"
  }
};

console.log("name: " + person.name);
console.log("role: " + person["role"]);
console.log("city: " + person.contact.city);

person.role = "engineer";
person.department = "Research";
console.log("updated role: " + person.role);
console.log("new department: " + person.department);

delete person.department;
console.log("after delete: " + person.department);
console.log("missing property: " + person.office);

const jsonText = JSON.stringify(person);
console.log("json: " + jsonText);

const restoredPerson = JSON.parse(jsonText);
console.log("restored city: " + restoredPerson.contact.city);
```

```text
name: Ada
role: analyst
city: Chicago
updated role: engineer
new department: Research
after delete: undefined
missing property: undefined
json: {"name":"Ada","role":"engineer","contact":{"city":"Chicago"}}
restored city: Chicago
```

## Creating and reading properties

The braces create an object. Each property has a name, a colon, and a value. Commas separate the properties. Here, `name`, `role`, and `contact` are properties of `person`.

Dot notation reads a property when we know its name in the code:

```javascript
console.log(person.name);
```

Bracket notation reads a property by using a string containing its name:

```javascript
console.log(person["role"]);
```

The results are the same when the property name is written directly. Bracket notation becomes especially useful when the property name comes from another value:

```javascript
const field = "name";
console.log(person[field]);
```

The brackets evaluate `field` and use its value, `"name"`, as the property name. Writing `person.field` would look for a property literally named `field`, which is a different question.

> An object groups related values together.
>
> A property is a name/value pair inside an object. Here, `name` is the name, and `"Ada"` is its value.
>
> Dot notation, such as `person.name`, reads a property whose name is written directly in the code.
>
> Bracket notation, such as `person[field]`, reads a property whose name comes from a value.

## Adding, changing, and removing properties

Assigning to a property does two jobs. If the property already exists, assignment changes its value. If it does not exist, assignment adds it:

```javascript
person.role = "engineer";
person.department = "Research";
```

The first line changes `role`. The second line creates `department`. The object does not need a separate method for those two cases. JavaScript checks whether the property exists and performs the appropriate assignment.

The `delete` operator removes a property:

```javascript
delete person.department;
```

After that line, `person.department` produces `undefined`. Accessing a property that does not exist also produces `undefined` rather than throwing an error. That is convenient for optional information, but it means a misspelled property can quietly produce an empty-looking result. We will learn safer checks as conditional logic develops.

## Nested objects

The `contact` property contains another object. We can follow the path one property at a time:

```javascript
console.log(person.contact.city);
```

First JavaScript reads `person.contact`, producing the inner object. Then it reads `.city` from that inner object. Nesting can represent real records, but deeply nested paths become difficult to read and maintain. If a path starts looking like a miniature expedition, give an important intermediate value a name.

Arrays can also appear as property values, and objects can appear inside arrays. We will handle those collection shapes in the collections chapter instead of smuggling the entire topic into one already busy lesson.

## JSON serialization

`JSON.stringify()` converts an object into JSON text suitable for storage or transport. `JSON.parse()` converts JSON text back into a JavaScript value:

```javascript
const jsonText = JSON.stringify(person);
const restoredPerson = JSON.parse(jsonText);
```

The restored object has the same data, but it is a new object. JSON carries data, not JavaScript behavior. Functions, `undefined` properties, and several other JavaScript-specific values need special care because they are not represented in ordinary JSON.

> JSON is a text format for exchanging structured data. `JSON.stringify()` serializes a JavaScript value into JSON text, and `JSON.parse()` deserializes JSON text into a JavaScript value.

## Try it Yourself

Add a `phone` property inside `contact`, read it with dot notation, then read it again using a variable and bracket notation. Change `role`, add an `office` property, and delete it. Finally, try reading a property that does not exist and explain why `undefined` appears.

Serialize the object, inspect the JSON text, parse it back, and confirm that the restored object still contains the nested city. Add a function property as an experiment and observe what happens to it during serialization.

---

