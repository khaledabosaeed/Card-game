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
            let flippedCards = [...stata.listOfFlipped, action.playload.index];
            const cards: ICard[] = [...stata.CardsList];
            if (flippedCards.length === 2) {
                if ((cards[flippedCards[0]].id === cards[flippedCards[1]].id)) {
                    stata.CardsList.map((c) => { return c.id === action.playload.id ? { ...c, visible: true } : c })
                    flippedCards = []
                }
            } else {
                if (!cards[action.playload.index].visible) {
                    cards[action.playload.index].visible = true;
                }
            }
            return { ...stata, listOfFlipped: flippedCards, CardsList: cards }
        }
        case 'mismatch': {
            let flippedCards = [...stata.listOfFlipped];
            const cards: ICard[] = [...stata.CardsList];
            if ( flippedCards[0] !== flippedCards[1]) {
                cards[flippedCards[0]].visible = false;
                cards[flippedCards[1]].visible = false;
                flippedCards = []
            }
            return { ...stata, listOfFlipped: flippedCards, CardsList: cards }
        }
        default: {
            return stata
        }
    }
}
