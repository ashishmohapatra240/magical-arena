// Player class representing a player in the arena
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
  // Roll a six-sided dice
  rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }
  // Reduce player's health by the damage amount
  takeDamage(damage) {
    if (damage < 0) {
      throw new Error("Damage must be a positive integer.");
    }
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
}

export default Player;
