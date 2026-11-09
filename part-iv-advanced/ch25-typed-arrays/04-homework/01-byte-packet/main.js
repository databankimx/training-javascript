const buffer = new ArrayBuffer(4);
const bytes = new Uint8Array(buffer);
const view = new DataView(buffer);

view.setUint8(0, 7);
view.setUint16(1, 300, true);

console.log("bytes: " + [...bytes].join(", "));
console.log("version: " + view.getUint8(0));
console.log("count: " + view.getUint16(1, true));
