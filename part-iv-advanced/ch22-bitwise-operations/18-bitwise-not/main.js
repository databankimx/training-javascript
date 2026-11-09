const value = 0b00001111;
const result = (~value) & 0xff;
console.log(`NOT 00001111 (low 8 bits): ${result.toString(2).padStart(8, "0")}`);
