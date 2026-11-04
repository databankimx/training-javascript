function taskMessage(name, count = 0) {
  return `${name} has ${count} tasks`;
}

console.log(taskMessage("Ada", 3));
console.log(taskMessage("Grace"));
