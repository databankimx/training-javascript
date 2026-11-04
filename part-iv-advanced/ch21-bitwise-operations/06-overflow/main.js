function signedByte(value) {
  const stored = value & 0xff;
  return stored & 0x80 ? stored - 0x100 : stored;
}

const unsignedByte = 0b1111_1111;
const wrappedUnsigned = (unsignedByte + 1) & 0xff;
console.log("ordinary Number: " + (unsignedByte + 1));
console.log("stored as 8 bits: " + wrappedUnsigned.toString(2).padStart(8, "0"));
console.log("stored decimal: " + wrappedUnsigned);

const signedStart = 0b0111_1111;
const signedStored = (signedStart + 1) & 0xff;
console.log("ordinary Number: " + (signedStart + 1));
console.log("stored bits: " + signedStored.toString(2).padStart(8, "0"));
console.log("signed interpretation: " + signedByte(signedStored));

const ordinary = 2 ** 32;
const bitwise = ordinary | 0;
console.log("ordinary Number: " + ordinary);
console.log("after bitwise conversion: " + bitwise);
