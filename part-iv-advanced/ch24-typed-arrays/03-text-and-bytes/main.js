const message = "café";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const bytes = encoder.encode(message);

console.log("bytes: " + [...bytes].join(", "));
console.log("JavaScript length: " + message.length);
console.log("byte count: " + bytes.length);
console.log("decoded: " + decoder.decode(bytes));
