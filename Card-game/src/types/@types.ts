export enum Levels {
    EASY = 2,
    MEDIUM = 4,
    HARD = 6,
}
export interface ICard {
    id: number,
    image: string,
    visible: boolean
}
export interface IScore {
    playerName: string
    time: number
    moves: number
    level: Levels
}
export interface IGame {
  name: string;
  level: Levels;
  finished: boolean;
  moves: number
  time: number;
}