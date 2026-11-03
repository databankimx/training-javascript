import multiply, { add } from "./math.js";

console.log(add(5, 7));
console.log(multiply(3, 4));

import { add as sum } from "./math.js";
console.log(sum(5, 7));

import * as math from "./math.js";
console.log(math.add(5, 7));
console.log(math.default(3, 4));
