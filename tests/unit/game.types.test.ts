import { describe, it, expect } from 'vitest';
import { GameMode, GameStatus, Player, Game } from '@/types/game';

describe('Game Types', () => {
  describe('GameMode', () => {
    it('should allow 501 as valid mode', () => {
      const mode: GameMode = 501;
      expect(mode).toBe(501);
    });

    it('should allow 301 as valid mode', () => {
      const mode: GameMode = 301;
      expect(mode).toBe(301);
    });
  });

  describe('GameStatus', () => {
    it('should have configuring status', () => {
      const status: GameStatus = 'configuring';
      expect(status).toBe('configuring');
    });

    it('should have in-progress status', () => {
      const status: GameStatus = 'in-progress';
      expect(status).toBe('in-progress');
    });

    it('should have finished status', () => {
      const status: GameStatus = 'finished';
      expect(status).toBe('finished');
    });
  });

  describe('Player', () => {
    it('should create a valid player object', () => {
      const player: Player = {
        id: 'test-id',
        name: 'Test Player',
        scores: [20, 1, 18],
        currentRound: 1,
        totalDartsThrown: 3,
      };

      expect(player.id).toBe('test-id');
      expect(player.name).toBe('Test Player');
      expect(player.scores).toEqual([20, 1, 18]);
      expect(player.currentRound).toBe(1);
      expect(player.totalDartsThrown).toBe(3);
    });
  });

  describe('Game', () => {
    it('should create a valid game object', () => {
      const game: Game = {
        id: 'game-id',
        roomCode: 'ABC123',
        mode: 501,
        startingScore: 501,
        status: 'configuring',
        players: [],
        currentPlayerIndex: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(game.id).toBe('game-id');
      expect(game.roomCode).toBe('ABC123');
      expect(game.mode).toBe(501);
      expect(game.players).toEqual([]);
      expect(game.currentPlayerIndex).toBe(0);
    });
  });
});
