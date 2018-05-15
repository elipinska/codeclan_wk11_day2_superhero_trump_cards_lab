const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Game', function() {

  let game;

  beforeEach(function () {
    player1 = new Player('John');
    player2 = new Player('Anna');
    deck = [new Card('Superman', 6, 9, 70), new Card('Scarlet Witch', 7, 10, 5), new Card('Black Widow', 8, 6, 90), new Card('The Flash', 7, 4, 10), new Card('Wonder Woman', 8, 7, 50), new Card('Batman', 10, 5, 6)];
    game = new Game(player1, player2, deck);
  });

  it('should have player1', function() {
    const actual = game.player1.name;
    assert.strictEqual(actual, 'John');
  });

  it('should have player2', function() {
    const actual = game.player2.name;
    assert.strictEqual(actual, 'Anna');
  });

  it('should have a deck of 6 cards', function() {
    const actual = game.deck.length;
    assert.strictEqual(actual, 6);
  });

  it('should deal out 3 cards to each player', function() {
    game.dealCardsToPlayers();
    const actual = game.player2.hand.length;
    assert.strictEqual(actual, 3);
  });

    it('should be able to conduct a turn', function() {
      game.dealCardsToPlayers();
      game.conductTurnAndReturnWinner('intelligence');
      assert.strictEqual(player2.hand.length, 4);
    });

    it('should be able to calculate winner', function() {
      game.dealCardsToPlayers();
      const actual = game.calculateWinner(player1.playTopCard(), player2.playTopCard(), 'intelligence');
      assert.deepStrictEqual(actual, player2);
    });

//playGame has an element of randomness in category selection, so the test below won't always pass
    // it('should be able to play a full game', function() {
    //   game.playGame();
    //   assert.strictEqual(player2.hand.length, 6);
    // });

  // playGame has an element of randomness in category selection, so the test below won't always pass
  // it('should return the winner at the end of the game', function() {
  //   const actual = game.playGame();
  //   assert.deepStrictEqual(actual, player2);
  // })



});
