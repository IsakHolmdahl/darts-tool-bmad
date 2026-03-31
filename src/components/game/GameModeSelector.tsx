'use client';

import { GameMode } from '@/types/game';

interface GameModeSelectorProps {
  selectedMode: GameMode;
  onModeChange: (mode: GameMode) => void;
}

export function GameModeSelector({ selectedMode, onModeChange }: GameModeSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Game Mode
      </label>
      <div className="flex gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="gameMode"
            value={501}
            checked={selectedMode === 501}
            onChange={() => onModeChange(501)}
            className="h-4 w-4 accent-emerald-600"
          />
          <span className="text-lg font-semibold">501</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="gameMode"
            value={301}
            checked={selectedMode === 301}
            onChange={() => onModeChange(301)}
            className="h-4 w-4 accent-emerald-600"
          />
          <span className="text-lg font-semibold">301</span>
        </label>
      </div>
    </div>
  );
}
