import { createContext, useState, type ReactNode } from "react";
import { Levels, type IGame } from "../types/@types";


interface IGameContext {
  game: IGame;
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
  resetGame: () => void;
}
const INITIAL_STATE = { level: Levels.MEDIUM, name: '', finished: false, moves: 0, time: 0 }

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext<IGameContext>({
  game: INITIAL_STATE,
  setGame: () => { },
  resetGame: () => { },
});
export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<IGame>(INITIAL_STATE);
  const resetGame = () => setGame(INITIAL_STATE);

  return (
    <GameContext.Provider value={{ game, setGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};
