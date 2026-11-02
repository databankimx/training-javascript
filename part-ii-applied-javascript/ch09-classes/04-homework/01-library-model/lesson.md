# Homework: library model

Design a small library model using modern classes. A `Book` should know its title and whether it is borrowed. A `Library` should hold books and provide methods to borrow and return one.

```javascript
class Book {
  constructor(title) {
    this.title = title;
    this.borrowed = false;
  }
}
```

```text
Borrowed: The Odyssey
Available: The Hobbit
```

---

## Try it Yourself

Implement the two classes and their methods. Then write a classic constructor-function version of one class beside it. Explain which style you would choose for new code and why. Use **Show example (spoiler)** only after both models work.

---
