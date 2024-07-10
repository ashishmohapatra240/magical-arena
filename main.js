import Player from "./src/player.js";
import Arena from "./src/arena.js";

const player1 = new Player(50, 5, 10);
const player2 = new Player(100, 10, 5);

const arena = new Arena(player1, player2);
const winner = arena.fight();

const winnerInfo = `The winner is the player with health: ${winner.health}`;
const boxWidth = winnerInfo.length + 4;
const topBorder = "╔" + "═".repeat(boxWidth) + "╗";
const bottomBorder = "╚" + "═".repeat(boxWidth) + "╝";
const emptyLine = "║" + " ".repeat(boxWidth) + "║";

console.log(topBorder);
console.log(emptyLine);
console.log(`║  ${winnerInfo}  ║`);
console.log(emptyLine);
console.log(bottomBorder);
