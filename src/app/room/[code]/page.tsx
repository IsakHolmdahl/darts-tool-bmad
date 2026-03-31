'use client';

import { useParams } from 'next/navigation';
import { useGameStore } from '@/stores/gameStore';

export default function RoomPage() {
  const params = useParams();
  const roomCode = params.code as string;
  const game = useGameStore((state) => state.game);

  // If no game exists yet, show a message
  if (!game) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black dark:text-zinc-50">
            Room not found
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Room code: {roomCode}
          </p>
          <p className="mt-4 text-zinc-500 dark:text-zinc-500">
            Please create a new game from the landing page.
          </p>
        </div>
      </div>
    );
  }

  // Display game room with configuration
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="w-full max-w-2xl space-y-8">
        {/* Room Code Display */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Room: {roomCode}
          </h1>
        </div>

        {/* Game Status */}
        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900">
          <div className="space-y-4">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-600 dark:text-zinc-400">Mode</span>
              <span className="font-bold text-emerald-600">{game.mode}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-600 dark:text-zinc-400">Starting Score</span>
              <span className="font-bold text-black dark:text-zinc-50">{game.startingScore}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-600 dark:text-zinc-400">Status</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                {game.status}
              </span>
            </div>
          </div>
        </div>

        {/* Placeholder for player configuration (Story 1.2) */}
        <div className="rounded-xl bg-zinc-100 p-8 text-center dark:bg-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400">
            Player configuration coming in Story 1.2...
          </p>
        </div>
      </div>
    </div>
  );
}
