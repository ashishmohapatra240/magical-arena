const Player = require('./src/player');
const Arena = require('./src/arena');

const player1 = new Player(50, 5, 10);
const player2 = new Player(100, 10, 5);

const arena = new Arena(player1, player2);
const winner = arena.fight();

console.log(`The winner is the player with health: ${winner.health}`);
