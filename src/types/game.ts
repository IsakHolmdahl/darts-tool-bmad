/**
 * Game type definitions for darts-tool-bmad
 */

export type GameMode = 501 | 301;

export type GameStatus = 
  | 'configuring'  // Setting up players before game starts
  | 'in-progress'  // Game actively being played
  | 'finished';    // Game completed

export interface Player {
  id: string;
  name: string;
  scores: number[];      // Scores for each dart throw
  currentRound: number;   // Current round number
  totalDartsThrown: number;
}

export interface Game {
  id: string;
  roomCode: string;
  mode: GameMode;
  startingScore: GameMode;
  status: GameStatus;
  players: Player[];
  currentPlayerIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateGameInput {
  mode: GameMode;
  roomCode: string;
}

export interface CreateGameOutput {
  game: Game;
}
