const buffer = new ArrayBuffer(2);
const bytes = new Uint8Array(buffer);
const view = new DataView(buffer);

view.setUint16(0, 0x1234, true);

console.log("bytes: " + [...bytes].join(", "));
console.log("little-endian: " + view.getUint16(0, true));
console.log("big-endian: " + view.getUint16(0, false));
