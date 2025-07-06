import { createContext, useState, type ReactNode } from "react";
import { Elevels } from "../types/@types";

interface IGame {
  name: string;
  level: Elevels;
}
interface IGameContext {
  game: IGame;
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext<IGameContext>({
  game: { level: Elevels.Hard, name: '' },
  setGame: () => {} 
});
export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<IGame>({ level: Elevels.MEDIUM, name: '' });
  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
    );
};
