function reconstructInteger(data, size = 4) {
  if (data.length !== size) {
    throw new Error("Invalid data length");
  }

  let value = 0;

  for (let i = 0; i < data.length; i += 1) {
    value += (data[i] << (i * 8)) >>> 0;
  }

  return value >>> 0;
}

function reconstructIntegers(byteArray, size = 4) {
  if (byteArray.length % size !== 0) {
    throw new Error("Invalid data length");
  }

  const integers = [];

  for (let start = 0; start < byteArray.length; start += size) {
    const data = byteArray.slice(start, start + size);
    integers.push(reconstructInteger(data, size));
  }

  return integers;
}

const byteArray = [
  0b0000_0000, 0b0000_0000, 0b0000_0000, 0b0000_0000,
  0b1101_0010, 0b0000_0010, 0b1001_0110, 0b0100_1001,
  0b0001_0101, 0b1100_1101, 0b0101_1011, 0b0000_0111,
  0b1111_1111, 0b1111_1111, 0b1111_1111, 0b1111_1111
];

for (const value of reconstructIntegers(byteArray)) {
  console.log(value.toLocaleString("en-US").padStart(13, " "));
}
