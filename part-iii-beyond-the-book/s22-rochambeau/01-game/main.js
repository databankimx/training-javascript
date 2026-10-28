const beats={rock:'scissors',paper:'rock',scissors:'paper'};
function outcome(player,opponent){
  if(!Object.hasOwn(beats,player)||!Object.hasOwn(beats,opponent))throw new Error('Invalid move');
  return player===opponent?'draw':beats[player]===opponent?'win':'lose';
}
console.log(outcome('rock','scissors'));
console.log(outcome('rock','paper'));
console.log(outcome('rock','rock'));
