import { describe, it, expect } from 'vitest';
import Player from '../src/player.js';

describe("Player", () => {
  it("should initialize with correct attributes", () => {
    const player = new Player(50, 5, 10);
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });

  it("should throw an error if initialized with non-positive integers", () => {
    expect(() => new player(-50, 5, 10)).toThrow;
    expect(() => new player(50, -5, 10)).toThrow;
    expect(() => new player(50, 5, -10)).toThrow;
  });

  it("should return a value between 1 and 6 for rollDice", () => {
    const player = new Player(50, 5, 10);
    expect(player.rollDice()).toBeGreaterThanOrEqual(1);
    expect(player.rollDice()).toBeLessThanOrEqual(6);
  });

  it("should reduce damage correctly when taking damage", () => {
    const player = new Player(50, 5, 10);
    player.takeDamage(10);
    expect(player.health).toBe(40);
    player.takeDamage(40);
    expect(player.health).toBe(0);
  });

  it("should throw an error if taking negative damage", () => {
    const player = new Player(50, 5, 10);
    expect(() => player.takeDamage(-10)).toThrow();
  });
});
