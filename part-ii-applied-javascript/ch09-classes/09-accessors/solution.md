## Solution

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

The accessor pair makes `score` look like data while keeping validation in one place. `fullName` is calculated when it is read, so it cannot become stale when either name changes.
---
