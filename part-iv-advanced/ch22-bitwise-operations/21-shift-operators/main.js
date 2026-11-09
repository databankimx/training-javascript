const value = 2;

console.log("left once: " + (value << 1));
console.log("left twice: " + (value << 2));
console.log("right once: " + (16 >> 1));
console.log("right twice: " + (16 >> 2));

// Bit 31 is the sign bit in a signed 32-bit bitwise result.
const highestPositiveBit = 1 << 30;
console.log("sign bit: " + (highestPositiveBit << 1));
console.log("past sign bit: " + (highestPositiveBit << 2));

// A right shift can discard bits that fall off the right-hand side.
console.log("underflow: " + (4 >> 3));

// >>> lets us inspect the same bits as an unsigned value.
console.log("unsigned sign bit: " + ((-1 >>> 0) >>> 31));
