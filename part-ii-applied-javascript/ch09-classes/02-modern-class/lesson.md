# Modern class syntax

Modern JavaScript gives us `class` syntax for the same general object-and-method pattern. It is easier to read than the prototype assignment, but it is not a completely different object system. JavaScript still uses prototypes underneath.

```javascript
class Learner {
  constructor(name) {
    this.name = name;
    this.completed = 0;
  }

  completeLesson() {
    this.completed += 1;
  }
}

const learner = new Learner("Ada");
learner.completeLesson();
console.log(`${learner.name} completed ${learner.completed} lesson.`);
```

```text
Ada completed 1 lesson.
```

The constructor replaces the old function body, and the method appears inside the class body rather than on `Learner.prototype`. Creating an instance still uses `new`.

> `class` is syntax for defining a constructor and its prototype methods in one readable block.
>
> `new Learner("Ada")` creates an instance and runs the constructor.

---

## Try it Yourself

Add a `describe()` method and a second learner. Then add a subclass called `Mentor` with an extra `specialty` property and a method that reports it.

---
