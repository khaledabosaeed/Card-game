import { Elevels, type ICard } from "../types/@types";
import { cardgenertor } from '../utils/game.utils';

interface IinitialState {
    initalized: boolean;
    CardsList: ICard[];
    moves: number
    listOfFlipped: number[]
    visible: boolean
}
export type Action =
    | { type: 'init', playload: { level: Elevels } }
    | { type: 'flip card', playload: { id: number, index: number } }
    | { type: "mismatch" };
export const gameReducer = (stata: IinitialState, action: Action): IinitialState => {
    switch (action.type) {
        case 'init': {
            const cards = cardgenertor(action.playload.level);
            return { ...stata, CardsList: cards, moves: 0, initalized: true }
        }
        case 'flip card': {
            if (stata.listOfFlipped.includes(action.playload.index)) return stata;
            const flippedCards = [...stata.listOfFlipped, action.playload.index];
            let cards = stata.CardsList.map((card, i) =>
                i === action.playload.index ? { ...card, visible: true } : card
            );
            if (flippedCards.length === 2) {
                if ((cards[flippedCards[0]].id === cards[flippedCards[1]].id)) {
                    cards = cards.map((card, i) =>
                        i === flippedCards[0] || i === flippedCards[1] ? { ...card, visible: true } : card
                    );
                    return { ...stata, listOfFlipped: [], CardsList: cards }
                }
                return { ...stata, listOfFlipped: flippedCards, CardsList: cards }
            } else {
                return { ...stata, listOfFlipped: flippedCards, CardsList: cards }
            }
        }
        case 'mismatch': {
            const cards = stata.CardsList.map((card, i) =>
                stata.listOfFlipped.includes(i) ? { ...card, visible: false } : card
            );
            return { ...stata, listOfFlipped: [], CardsList: cards }
        }
        default: {
            return stata
        }
    }
}
