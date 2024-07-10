class Player {
  constructor(health, strength, attack) {
    if (health <= 0 || strength <= 0 || attack <= 0) {
      throw new Error(
        "Health, strength, and attack must be positive integers."
      );
    }
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
  rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  takeDamage(damage) {
    if (damage < 0) {
      throw new Error("Damage must be a positive integer.");
    }
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
}

module.exports = Player;
