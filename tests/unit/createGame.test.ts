import { describe, it, expect } from 'vitest';
import { createGame, getStartingScore } from '@/lib/game-logic/createGame';

describe('createGame', () => {
  it('should create a game with 501 mode', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST01' });
    
    expect(game.mode).toBe(501);
    expect(game.startingScore).toBe(501);
    expect(game.roomCode).toBe('TEST01');
    expect(game.status).toBe('configuring');
  });

  it('should create a game with 301 mode', () => {
    const { game } = createGame({ mode: 301, roomCode: 'TEST02' });
    
    expect(game.mode).toBe(301);
    expect(game.startingScore).toBe(301);
    expect(game.roomCode).toBe('TEST02');
  });

  it('should initialize with empty players array', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST03' });
    
    expect(game.players).toEqual([]);
  });

  it('should set currentPlayerIndex to 0', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST04' });
    
    expect(game.currentPlayerIndex).toBe(0);
  });

  it('should have a valid UUID for id', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST05' });
    
    expect(game.id).toBeDefined();
    expect(game.id.length).toBeGreaterThan(0);
  });

  it('should set createdAt and updatedAt to Date objects', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST06' });
    
    expect(game.createdAt).toBeInstanceOf(Date);
    expect(game.updatedAt).toBeInstanceOf(Date);
  });

  it('should set status to configuring', () => {
    const { game } = createGame({ mode: 501, roomCode: 'TEST07' });
    
    expect(game.status).toBe('configuring');
  });
});

describe('getStartingScore', () => {
  it('should return 501 for 501 mode', () => {
    expect(getStartingScore(501)).toBe(501);
  });

  it('should return 301 for 301 mode', () => {
    expect(getStartingScore(301)).toBe(301);
  });
});
