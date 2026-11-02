## Solution

```javascript
function Learner(name) {
  this.name = name;
  this.completed = 0;
}

Learner.prototype.completeLesson = function () {
  this.completed += 1;
};

Learner.prototype.resetProgress = function () {
  this.completed = 0;
};

const ada = new Learner("Ada");
const grace = new Learner("Grace");
ada.completeLesson();
ada.completeLesson();
grace.completeLesson();
ada.resetProgress();
console.log(`${ada.name}: ${ada.completed}`);
console.log(`${grace.name}: ${grace.completed}`);
```

`resetProgress` changes only the instance that called it. The method itself remains shared through the prototype.

```text
Ada: 0
Grace: 1
```

---
