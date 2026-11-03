# Accessors and encapsulation

A class often needs to expose a convenient value while keeping control over how that value is calculated or changed. JavaScript getters and setters let a property look like ordinary data while running method logic behind the scenes.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._score = 0;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    if (value < 0 || value > 100) {
      throw new RangeError("Score must be between 0 and 100");
    }

    this._score = value;
  }
}
```

```javascript
const person = new Person("Ada", "Lovelace");
person.score = 95;
console.log(person.fullName);
console.log(`Score: ${person.score}`);

try {
  person.score = 120;
} catch (error) {
  console.log(error.message);
}
```

```text
Ada Lovelace
Score: 95
Score must be between 0 and 100
```

> A getter is a method read like a property, without parentheses.
>
> A setter is a method that runs when code assigns to a property.
>
> Encapsulation means keeping an object's internal details behind a controlled interface. The leading underscore is a convention, not a security boundary.

The getter calculates `fullName) when it is read. The setter validates scores before changing the backing property `_score). Code using the class does not need to know how either property is implemented.

---

## Try it Yourself

Add a setter that rejects a blank last name. Add a getter for a letter grade, and explain why the grade should be calculated rather than stored separately.

---

## More background

See [MDN: get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [MDN: set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set).

---
