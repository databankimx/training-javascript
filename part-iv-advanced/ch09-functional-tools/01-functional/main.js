const compose=(f,g)=>value=>f(g(value));
const trim=text=>text.trim();
const upper=text=>text.toUpperCase();
console.log(compose(upper,trim)('  hello  '));
function memoize(fn){
  const cache=new Map();
  return value=>{
    if(!cache.has(value))cache.set(value,fn(value));
    return cache.get(value);
  };
}
let calls=0;
const square=memoize(n=>{
  calls++;
  return n*n;
});
console.log(square(5),square(5),calls);
