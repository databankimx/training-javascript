const applicationName = "Training app";

function report(topic) {
  const label = `${topic} is reviewing JavaScript`;
  console.log(label);
  console.log(applicationName);
}

report("Ada");

function addTag(tags, tag) {
  tags.push(tag);
}

const tags = ["javascript"];
addTag(tags, "beginner");
console.log(tags.join(", "));

function withTag(tags, tag) {
  return [...tags, tag];
}

const original = ["javascript"];
const updated = withTag(original, "beginner");
console.log(original.join(", "));
console.log(updated.join(", "));
