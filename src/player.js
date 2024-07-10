class Player {
  constructor(health, strength, attack) {
    this.health;
    this.strength;
    this.attack;
  }
  rollBack() {
    Math.floor(Math.random() * 6 + 1);
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
}

module.export = Player;
