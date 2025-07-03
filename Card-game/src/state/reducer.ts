import { Action } from './reducer';
import type { ICard } from "../types/@types";

interface IinitialState {
    CardsList: ICard[];
    moves: number
}

export type Action =
    | { type: 'init' }
    | { type: 'flip card', playload: number };

export const gameReducer = (stata: IinitialState, action: Action): IinitialState => {
    switch (action.type) {
        case 'init': {
            return stata
        }
        case 'flip card': {
            return stata
        }
        default: {
            break
        }
    }
}