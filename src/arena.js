class Arena {
  constructor(player1, player2) {
    if (!(player1 instanceof Player) || !(player2 instanceof Player)) {
      throw new Error("Arguments must be instances of Player.");
    }
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1.health > player2.health ? player2 : player1;
    this.currentDefender = player1.health > player2.health ? player1 : player2;
  }

  fight() {
    while (!this.isGameOver()) {
      this.attack(this.currentPlayer, this.currentDefender);
      this.switchPlayers();
    }
    return this.getWinner();
  }
  attack(attacker, defender) {
    const attackRoll = attacker.rollDice();
    const defendRoll = defender.rollDice();
    const damage =
      attacker.attack * attackRoll - defender.strength * defendRoll;
    console.log(
      `Attacker rolls: ${attackRoll}, Defender rolls: ${defendRoll}, Damage: ${damage}`
    );
    if (damage > 0) {
      defender.takeDamage(damage);
    }
  }

  switchPlayers() {
    [this.currentPlayer, this.currentDefender] = [
      this.currentDefender,
      this.currentPlayer,
    ];
  }

  isGameOver() {
    console.log(
      `Player1 Health: ${this.player1.health}, Player2 Health: ${this.player2.health}`
    );
    return this.player1.health === 0 || this.player2.health === 0;
  }

  getWinner() {
    return this.player1.health > this.player2.health
      ? this.player1
      : this.player2;
  }
}

module.exports = Arena;
