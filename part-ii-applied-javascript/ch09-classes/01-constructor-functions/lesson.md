# Classic constructor functions

Before we look at `class`, we need to talk about the problem it is trying to solve. Most useful programs have groups of related data and actions. A learner has a name and a completion count, but a learner can also complete a lesson, reset progress, or report a summary. Keeping those values and actions together gives the program a shape that matches the thing it is describing.

That is the basic idea behind object-oriented programming, usually shortened to OOP:

- An object combines related state, such as a learner's `name` and `completed` count.
- Methods are functions attached to that object. They describe behavior, such as completing a lesson.
- An instance is one particular object created from a shared design.
- A constructor initializes the state each new instance needs.

OOP is not magic, and it is not automatically better than a collection of functions and arrays. It is useful when a program has many similar things that each need their own state and the same set of behaviors. Without a shared design, we tend to repeat the same fields and functions:

```javascript
const ada = { name: "Ada", completed: 0 };
const grace = { name: "Grace", completed: 0 };

function completeLesson(learner) {
  learner.completed += 1;
}

completeLesson(ada);
completeLesson(grace);
```

That works. The function is separate from the data, though, and every caller has to remember which functions belong with which objects. A constructor pattern gives us one place to describe how a learner is created and what a learner can do.

---

## The older JavaScript pattern

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

The constructor initializes each object. The prototype holds one shared copy of `completeLesson`, rather than creating a new function for every learner. `new Learner("Ada")` creates an instance, sets up its connection to `Learner.prototype`, and runs the constructor with `this` referring to that new instance.

> A constructor function is an ordinary function used with `new` to create an object.
>
> An instance is one object created from a constructor or class. Ada and Grace can each be learners with separate completion counts.
>
> A method is a function associated with an object. It can read or change that object's state.
>
> A prototype is the shared object JavaScript consults when an instance does not have a property of its own.

The word “class” can be misleading in JavaScript. The language uses prototypes underneath, even when modern `class` syntax makes the code look more familiar to C# or Java developers. The next lesson shows the newer spelling. This lesson is here so older code does not look like a ritual performed by people who hated readability.

---

## Try it Yourself

Add a `resetProgress` prototype method. Create two learners and show that each has separate progress while both use the shared method.

Before you run it, identify the instance state, the method, the constructor, and the shared prototype behavior.

---

## More background

See [MDN: Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming), [MDN: Constructor](https://developer.mozilla.org/en-US/docs/Glossary/Constructor), and [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

---

