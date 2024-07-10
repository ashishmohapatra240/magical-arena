
# Magical Arena

The **Magical Arena** is a simulation where players fight matches based on their attributes: health, strength, and attack power. The game involves two players attacking each other in turns until one of them dies (i.e., their health reaches 0).

## Player Attributes

* **Health**: A positive integer representing the player's health.
* **Strength**: A positive integer representing the player's defensive power.
* **Attack**: A positive integer representing the player's offensive power.

## Rules

1. **Switch-Players**: Players attack in turns, starting with the player who has the lower health.
2. **Dice Rolls**:
   * The attacking player rolls the attacking dice.
   * The defending player rolls the defending dice.
3. **Damage Calculation**:
   * The attack value multiplied by the outcome of the attacking dice roll is the damage created by the attacker.
    *The defender's strength value multiplied by the outcome of the defending dice roll is the damage defended by the defender.
    *The excess damage (damage created - damage defended) reduces the defender's health.
4. **Game End**: The game ends when any player's health reaches 0.

## Getting Started

### Prerequisites

* Node.js installed on your machine.

### Install dependencies

    npm install

### Running the Project

1. **Run the main application**:

    ```bash
    npm start
    ```

2. **Run tests**:

    ```bash
    npm test
    ```

3. **Run tests with coverage**:

    ```bash
    npm run coverage
    ```

### Project Structure

```plaintext
project-root/
├── src/
│   ├── player.js
│   ├── arena.js
├── test/
│   ├── player.test.js
│   ├── arena.test.js
├── main.js
├── package.json
├── vitest.config.js
├── README.md
```
