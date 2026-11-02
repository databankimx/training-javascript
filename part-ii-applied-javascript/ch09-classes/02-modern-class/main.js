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
