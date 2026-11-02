## Solution

```javascript
class Learner {
  constructor(name) {
    this.name = name;
    this.completed = 0;
  }

  completeLesson() {
    this.completed += 1;
  }

  describe() {
    return `${this.name} completed ${this.completed} lesson.`;
  }
}

class Mentor extends Learner {
  constructor(name, specialty) {
    super(name);
    this.specialty = specialty;
  }

  describeSpecialty() {
    return `${this.name} mentors ${this.specialty}.`;
  }
}

const mentor = new Mentor("Grace", "JavaScript");
mentor.completeLesson();
console.log(mentor.describe());
console.log(mentor.describeSpecialty());
```

`extends` creates a subclass, and `super(name)` runs the parent constructor before the subclass adds its own property.

```text
Grace completed 1 lesson.
Grace mentors JavaScript.
```

---
