'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GameMode } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { GameModeSelector } from './GameModeSelector';

export function LandingScreen() {
  const router = useRouter();
  const createNewGame = useGameStore((state) => state.createNewGame);
  const [selectedMode, setSelectedMode] = useState<GameMode>(501);

  const handleCreateGame = () => {
    const game = createNewGame(selectedMode);
    if (game) {
      router.push(`/room/${game.roomCode}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="w-full max-w-lg space-y-12">
        {/* Dartboard Visual */}
        <div className="flex justify-center">
          <div className="relative h-48 w-48">
            {/* Simplified dartboard SVG */}
            <svg viewBox="0 0 200 200" className="h-full w-full">
              {/* Outer ring (wire) */}
              <circle cx="100" cy="100" r="98" fill="none" stroke="zinc-400" strokeWidth="2" />
              
              {/* Double ring */}
              <circle cx="100" cy="100" r="78" fill="none" stroke="black" strokeWidth="12" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="8" />
              
              {/* Triple ring */}
              <circle cx="100" cy="100" r="52" fill="none" stroke="black" strokeWidth="10" />
              <circle cx="100" cy="100" r="52" fill="none" stroke="white" strokeWidth="6" />
              
              {/* Single outer */}
              <circle cx="100" cy="100" r="40" fill="black" />
              
              {/* Single inner */}
              <circle cx="100" cy="100" r="14" fill="black" />
              <circle cx="100" cy="100" r="10" fill="white" />
              
              {/* Bullseye */}
              <circle cx="100" cy="100" r="6" fill="#22c55e" />
              
              {/* Numbers */}
              {[20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5].map((num, i) => {
                const angle = (i * 18 - 90) * (Math.PI / 180);
                const x = 100 + 88 * Math.cos(angle);
                const y = 100 + 88 * Math.sin(angle);
                return (
                  <text
                    key={num}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-zinc-800 text-[8px] font-bold dark:fill-zinc-200"
                  >
                    {num}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Darts
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Play 501 or 301 with friends
          </p>
        </div>

        {/* Create Game Section */}
        <div className="space-y-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
          <GameModeSelector
            selectedMode={selectedMode}
            onModeChange={setSelectedMode}
          />
          
          <button
            type="button"
            onClick={handleCreateGame}
            className="w-full rounded-full bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
          >
            Create New Game
          </button>
        </div>
      </div>
    </div>
  );
}
