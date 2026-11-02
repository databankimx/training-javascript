const message = "HELLO";
const key = 42;

function xorMessage(text, secret) {
  return [...text]
    .map(character => character.charCodeAt(0) ^ secret)
    .map(value => String.fromCharCode(value))
    .join("");
}

const encoded = xorMessage(message, key);
const decoded = xorMessage(encoded, key);

console.log("encoded: " + encoded);
console.log("decoded: " + decoded);

