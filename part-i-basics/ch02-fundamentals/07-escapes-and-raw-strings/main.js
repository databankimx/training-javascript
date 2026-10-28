// Quotation marks inside a string
const quote = "She said, \"Hello.\"";
console.log(quote);

// Escape sequences can add characters that are hard to type directly
const lines = "First line\nSecond line";
console.log(lines);

// A backslash starts an escape sequence, so a Windows path needs doubled backslashes
const path = "C:\\Users\\Ada\\notes.txt";
console.log(path);

// String.raw keeps backslashes as literal characters in a template
const rawPath = String.raw`C:\Users\Ada\notes.txt`;
console.log(rawPath);
