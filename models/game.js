const Game = function(player1, player2, deck) {
  this.player1 = player1;
  this.player2 = player2;
  this.deck = deck;
}

Game.prototype.dealCardsToPlayers = function() {
  //for each card in the deck
  //deal card to player1
  //deal card to player2
  //stop when all cards have been used

  for (card of this.deck) {
    if (player1.hand.length <= player2.hand.length) {
      player1.hand.push(card);
    } else {
      player2.hand.push(card);
    }
  }
}

Game.prototype.calculateWinner = function(category) {
  //look at top card from each player
  //return player who wins
  let card1 = player1.playTopCard();
  let card2 = player2.playTopCard();

  let winner = null;

  switch(category) {
    case 'intelligence':
        winner = card1.intelligence > card2.intelligence ? player1 : player2;
        break;
    case 'strength':
        winner = card1.strength > card2.strength ? player1 : player2;
        break;
    case 'agility':
        winner = card1.agility > card2.agility ? player1 : player2;
        break;
    }

  return winner;
}

module.exports = Game;
