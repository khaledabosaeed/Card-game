import { Levels, type ICard } from "../types/@types";
import { cardGenerator } from '../utils/game.utils';

interface IInitialState {
    initialized: boolean;
    cardsList: ICard[];
    moves: number
    listOfFlipped: number[]
    visible: boolean
}
export type Action =
    | { type: 'init', payload: { level: Levels } }
    | { type: 'flip card', payload: { id: number, index: number } }
    | { type: "mismatch" };
export const gameReducer = (state: IInitialState, action: Action): IInitialState => {
    switch (action.type) {
        case 'init': {
            const cards = cardGenerator(action.payload.level);
            return { ...state, cardsList: cards, moves: 0, initialized: true }
        }
        case 'flip card': {
            if (state.listOfFlipped.includes(action.payload.index) || state.listOfFlipped.length === 2) return state;
            const flippedCards = [...state.listOfFlipped, action.payload.index];
            let cards = state.cardsList.map((card, i) =>
                i === action.payload.index ? { ...card, visible: true } : card
            );
            if (flippedCards.length === 2) {
                if ((cards[flippedCards[0]].id === cards[flippedCards[1]].id)) {
                    cards = cards.map((card, i) =>
                        i === flippedCards[0] || i === flippedCards[1] ? { ...card, visible: true } : card
                    );
                    return { ...state, listOfFlipped: [], cardsList: cards }
                }
                return { ...state, listOfFlipped: flippedCards, cardsList: cards }
            } else {
                return { ...state, listOfFlipped: flippedCards, cardsList: cards }
            }
        }
        case 'mismatch': {
            const cards = state.cardsList.map((card, i) =>
                state.listOfFlipped.includes(i) ? { ...card, visible: false } : card
            );
            return { ...state, listOfFlipped: [], cardsList: cards }
        }
        default: {
            return state
        }
    }
}
