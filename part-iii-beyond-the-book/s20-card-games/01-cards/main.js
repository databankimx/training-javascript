const deck = ['♣','♦','♥','♠'].flatMap(suit => ['A','2','3','4','5','6','7','8','9','10','J','Q','K'].map(rank => rank+suit));
const shuffled=[...deck];
for(let i=shuffled.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
}
console.log(deck.length, new Set(shuffled).size);
console.log(shuffled.slice(0,5).join(' '));
