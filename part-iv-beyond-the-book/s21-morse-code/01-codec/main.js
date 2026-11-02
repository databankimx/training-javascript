const codes=new Map([['S','...'],['O','---'],['A','.-'],['T','-']]);
function encode(text){
  return [...text.toUpperCase()].map(char=>{
    if(!codes.has(char))throw new Error('Unsupported: '+char);
    return codes.get(char);
  }).join(' ');
}
console.log(encode('SOS'));
