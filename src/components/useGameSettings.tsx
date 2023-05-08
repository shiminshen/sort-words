"use client"
import { createContext, useContext, useState } from 'react';
import type { ReactNode, SetStateAction, Dispatch } from 'react';

// create a context provider to access the game settings
// autoReplay: automatically replay the game when it ends
// showHints: show the hints for the game
const GameSettingsContext = createContext({
  autoReplay: true,
  setAutoReplay: (() => {}) as Dispatch<SetStateAction<boolean>>,
  showHints: false,
  setShowHints: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const GameSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [autoReplay, setAutoReplay] = useState(true);
  const [showHints, setShowHints] = useState(false);
  
  return (
    <GameSettingsContext.Provider value={{
      autoReplay,
      setAutoReplay,
      showHints,
      setShowHints,
    }}>
      {children}
    </GameSettingsContext.Provider>
  );
}

export const useGameSettings = () => useContext(GameSettingsContext);

