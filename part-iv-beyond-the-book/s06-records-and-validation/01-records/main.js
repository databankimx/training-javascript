function makeUser(name, age) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('Name required');
  if (!Number.isInteger(age) || age < 0) throw new RangeError('Invalid age');
  return Object.freeze({name:name.trim(), age});
}
const user = makeUser(' Ada ', 36);
console.log(user.name, user.age);
console.log(Object.isFrozen(user));
