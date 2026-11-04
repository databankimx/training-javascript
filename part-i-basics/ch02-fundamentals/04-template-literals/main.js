const name = "Bob";
const age = 30;

// Concatenation works, but spacing is easy to lose
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);

// Template literals keep the sentence readable
const clearerMessage = `Hello ${name}, you are ${age} years old.`;
console.log(clearerMessage);

// Interpolation can evaluate an expression
console.log(`Next year, ${name} will be ${age + 1}.`);

// Multi-line strings preserve their line breaks
const htmlTemplate = `
  <div>
    <h1>Welcome, ${name}!</h1>
  </div>
`;
console.log(htmlTemplate.trim());
