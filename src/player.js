class Player {
  constructor(health, strength, attack) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
  rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
}

module.exports = Player;
