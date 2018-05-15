const Player = function (name) {
  this.name = name;
  this.hand = [];

};

Player.prototype.playTopCard = function () {
  return this.hand.shift();
};

module.exports = Player;
