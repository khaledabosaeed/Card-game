export enum Elevels {
    'Hard' = 6,
    'MEDIUM' = 4,
    'EASY' = 2,
}
export interface ICard {
    id: number,
    image: string,
    visible: boolean
}
export interface IScore {
    palyerName: string
    time: number
    moves: number
    level: Elevels
}