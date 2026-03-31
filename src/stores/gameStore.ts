import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Game, GameMode } from '@/types/game';
import { createGame } from '@/lib/game-logic/createGame';
import { generateRoomCode } from '@/lib/utils/generateRoomCode';

interface GameState {
  game: Game | null;
  isLoading: boolean;
  error: string | null;
}

interface GameActions {
  createNewGame: (mode: GameMode) => Game | null;
  setGame: (game: Game) => void;
  clearGame: () => void;
  setError: (error: string | null) => void;
}

type GameStore = GameState & GameActions;

export const useGameStore = create<GameStore>()(
  devtools(
    (set) => ({
      game: null,
      isLoading: false,
      error: null,

      createNewGame: (mode: GameMode) => {
        set({ isLoading: true, error: null });
        try {
          const roomCode = generateRoomCode();
          const { game } = createGame({ mode, roomCode });
          set({ game, isLoading: false, error: null });
          return game;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to create game';
          set({ game: null, isLoading: false, error: errorMessage });
          return null;
        }
      },

      setGame: (game: Game) => {
        set({ game, error: null });
      },

      clearGame: () => {
        set({ game: null, error: null });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    { name: 'GameStore' }
  )
);
