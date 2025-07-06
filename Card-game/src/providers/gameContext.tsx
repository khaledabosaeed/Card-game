import { createContext, useState, type ReactNode } from "react";
import { Elevels } from "../types/@types";

interface IGame {
  name: string;
  level: Elevels;
  finished: boolean;
  moves: number
  time: number;
}
interface IGameContext {
  game: IGame;
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
  resetGame: () => void;

}
const INI_STATA = { level: Elevels.MEDIUM, name: '', finished: false, moves: 0, time: 0 }


// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext<IGameContext>({
  game: INI_STATA,
  setGame: () => { },
  resetGame: () => { },
});
export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<IGame>(INI_STATA);
  const resetGame = () => setGame(INI_STATA);

  return (
    <GameContext.Provider value={{ game, setGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};
