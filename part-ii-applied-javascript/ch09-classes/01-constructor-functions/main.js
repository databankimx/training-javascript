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
