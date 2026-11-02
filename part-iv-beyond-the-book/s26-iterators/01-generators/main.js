function* range(start,end){
  for(let i=start;i<end;i++)yield i;
}
function* squares(values){
  for(const value of values)yield value*value;
}
console.log([...squares(range(1,5))]);
const iterator=range(10,12);
console.log(iterator.next(),iterator.next(),iterator.next());
