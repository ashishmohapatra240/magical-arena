import { describe, it, expect } from "vitest";
import Player from "../src/player.js";
import Arena from "../src/arena.js";

describe("Arena", () => {
  it("should initialize with correct currentPlayer and currentDefender", () => {
    const player1 = new Player(50, 5, 10);
    const player2 = new Player(100, 10, 5);
    const arena = new Arena(player1, player2);
    console.log(arena.currentPlayer, player1);
    expect(arena.currentPlayer).toBe(player1);
    expect(arena.currentDefender).toBe(player2);
  });

  it("should throw an error if initialized with non-Player instances", () => {
    expect(() => new Arena({}, new Player(100, 10, 5))).toThrow();
    expect(() => new Arena(new Player(50, 5, 10), {})).toThrow();
    expect(() => new Arena({}, {})).toThrow();
  });

  it("should handle an attack correctly", () => {
    const player1 = new Player(50, 5, 10);
    const player2 = new Player(100, 10, 5);
    const arena = new Arena(player1, player2);
    const initialHealth = player2.health;
    arena.attack(player1, player2);
    console.log(
      `Player2 Health: ${player2.health}, Initial Health: ${initialHealth}`
    );
    expect(player2.health).toBeLessThan(initialHealth);
  });

  it("should declare the correct winner", () => {
    const player1 = new Player(1, 5, 10);
    const player2 = new Player(100, 10, 5);
    const arena = new Arena(player1, player2);
    const winner = arena.fight();
    console.log(`Winner: ${winner.health}`);
    expect(winner).toBe(player2);
  });

  it("should switch players correctly", () => {
    const player1 = new Player(50, 5, 10);
    const player2 = new Player(100, 10, 5);
    const arena = new Arena(player1, player2);
    arena.switchPlayers();
    console.log(
      `Current Player: ${arena.currentPlayer.health}, Expected: ${player2.health}`
    );
    expect(arena.currentPlayer).toBe(player2);
    expect(arena.currentDefender).toBe(player1);
  });

  it("should end the game when a player's health reaches 0", () => {
    const player1 = new Player(1, 5, 10);
    const player2 = new Player(100, 10, 5);
    const arena = new Arena(player1, player2);
    arena.fight();
    console.log(`Game Over: ${arena.isGameOver()}`);
    expect(arena.isGameOver()).toBe(true);
  });
});
