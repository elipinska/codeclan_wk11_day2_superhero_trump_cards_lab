const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');
const Game = require('../game.js');

describe('Player', function() {

  let player;

  beforeEach(function () {
    player1 = new Player('Sarah');
    player2 = new Player('Anna');
    card1 = new Card('Superman', 6, 9, 7);
    deck = [card1, new Card('Scarlet Witch', 7, 10, 5), new Card('Black Widow', 8, 6, 9), new Card('The Flash', 7, 4, 10), new Card('Wonder Woman', 8, 7, 5), new Card('Batman', 10, 5, 6)];
    game = new Game(player1, player2, deck);

  });

  it('should have a name', function(){
    const actual = player1.name;
    assert.strictEqual(actual, 'Sarah');
  });

  it('should have an empty array for hand', function () {
    const actual = player1.hand.length;
    assert.strictEqual(actual, 0);

  });

  it('should be able to play top card', function () {
    game.dealCardsToPlayers();
    const actual = player1.playTopCard();
    assert.deepStrictEqual(actual,card1);
    assert.strictEqual(player1.hand.length, 2);
  });

  it('should be able to receive cards', function() {
    const cards = [new Card('Wonder Woman', 8, 7, 5), new Card('Batman', 10, 5, 6)];
    player1.receiveCards(cards);
    const actual = player1.hand.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to check if their hand is empty', function() {
    const actual = player1.checkIfHandEmpty();
    assert.strictEqual(actual, true);
    game.dealCardsToPlayers();
    const actual2 = player1.checkIfHandEmpty();
    assert.strictEqual(actual2, false);
  });

});
