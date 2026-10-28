import test from 'node:test';
import assert from 'node:assert/strict';
const discount = (price, percent) => {
  if (price < 0 || percent < 0 || percent > 100) throw new RangeError('Invalid discount');
  return price * (1 - percent / 100);
};
test('20 percent off 50 is 40', () => assert.equal(discount(50,20),40));
test('rejects negative prices', () => assert.throws(() => discount(-1,20), RangeError));
