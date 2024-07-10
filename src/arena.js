class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1.health > player2.health ? player2 : player1;
    this.currentDefender = player1.health > player2.health ? player1 : player2;
  }

  fight() {
    while (!this.isGameOver) {
      this.attack(this.currentPlayer, this.currentDefender);
      this.switchPlayers(this.currentPlayer, this.currentDefender);
    }
    return this.getWinner();
  }
  attack(attacker, defender) {
    const attackRoll = attacker.rollDice();
    const defendRoll = defender.rollDice();
    const damage =
      attacker.attack * attackRoll - defender.strength * defendRoll;
    if (damage > 0) {
      defender.takeDamage(damage);
    }
  }

  switchPlayers(player1, player2) {
    [player1, player2] = [player2, player1];
  }

  getWinner() {
    return this.player1.health > this.player2.health
      ? this.player1
      : this.player2;
  }
}

module.export = Arena;