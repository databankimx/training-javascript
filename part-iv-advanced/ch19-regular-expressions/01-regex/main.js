const phoneNumbers = [
  "7134833111",
  "713-483-3111",
  "713.483.3111",
  "713,483,3111",
  "(713) 483-3111",
  "(713) 483-3111 ext: 42",
  "Don't match this one: (713) 483-3111 - BAD"
];

import { stdin } from "node:process";

const patterns = [
  /\d{10}/,
  /\d{3}-\d{3}-\d{4}/,
  /\d{3}[-.,]\d{3}[-.,]\d{4}/,
  /\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}/,
  /^\(?\d{3}\)?\s?[-.,]?\d{3}[-.,]?\d{4}(?:\s?ext:?\s?\d+)?$/
];

function waitForEnter() {
  if (stdin.readableEnded || stdin.destroyed) return Promise.resolve();
  return new Promise(resolve => {
    const finish = () => {
      stdin.off("data", finish);
      stdin.off("end", finish);
      stdin.off("close", finish);
      resolve();
    };
    stdin.once("data", finish);
    stdin.once("end", finish);
    stdin.once("close", finish);
    setImmediate(() => {
      if (stdin.readableEnded || stdin.destroyed) finish();
    });
  });
}

for (const [index, pattern] of patterns.entries()) {
  const matches = phoneNumbers.filter(phone => pattern.test(phone));
  console.log(`Pattern ${index + 1}: ${matches.length} match(es)`);
  matches.forEach(phone => console.log(`  ${phone}`));
  if (index < patterns.length - 1) {
    console.log("Press Enter for the next pattern...");
    await waitForEnter();
    process.stdout.write("\u000c");
  } else console.log(`Matches: ${matches.length}`);
}

