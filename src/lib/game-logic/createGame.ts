import { Game, GameMode, GameStatus, CreateGameInput, CreateGameOutput } from '@/types/game';

/**
 * Creates a new game with the specified mode
 * @param input - Game creation input containing mode and room code
 * @returns The created game object
 */
export function createGame(input: CreateGameInput): CreateGameOutput {
  const { mode, roomCode } = input;
  
  const game: Game = {
    id: crypto.randomUUID(),
    roomCode,
    mode,
    startingScore: mode,
    status: 'configuring' as GameStatus,
    players: [],  // Players added in Story 1.2
    currentPlayerIndex: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return { game };
}

/**
 * Gets the starting score for a given game mode
 * @param mode - The game mode (501 or 301)
 * @returns The starting score
 */
export function getStartingScore(mode: GameMode): number {
  return mode;
}
