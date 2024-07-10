class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1.health > player2.health ? player2 : player1;
    this.currentDefender = player1.health > player2.health ? player1 : player2;
  }
}

module.export = Arena;