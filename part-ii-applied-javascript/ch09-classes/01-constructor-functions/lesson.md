# Classic constructor functions

Before modern `class` syntax existed, JavaScript developers commonly used a constructor function with `new` and put shared methods on its prototype. You will still encounter this pattern in older code, libraries, and forms that have been running since everybody thought a three-column layout was a personality.

```javascript
function Learner(name) {
  this.name = name;
  this.completed = 0;
}

Learner.prototype.completeLesson = function () {
  this.completed += 1;
};

const learner = new Learner("Ada");
learner.completeLesson();
console.log(`${learner.name} completed ${learner.completed} lesson.`);
```

```text
Ada completed 1 lesson.
```

The constructor initializes each object. The prototype holds one shared copy of `completeLesson`, rather than creating a new function for every learner.

> A constructor function is an ordinary function used with `new` to create an object.
>
> A prototype is the shared object JavaScript consults when an instance does not have a property of its own.

---

## Try it Yourself

Add a `resetProgress` prototype method. Create two learners and show that each has separate progress while both use the shared method.

---
