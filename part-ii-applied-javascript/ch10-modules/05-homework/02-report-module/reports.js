export function formatTaskReport(person) {
  return `${person.name}: ${person.tasks} tasks`;
}

export function formatCompletionReport(person) {
  return `${person.name} completed ${person.completed} of ${person.tasks} tasks`;
}
