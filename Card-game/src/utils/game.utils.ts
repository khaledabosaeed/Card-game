import type { Levels, ICard } from "../types/@types";

export const cardGenerator = (level: Levels): ICard[] => {
    const cards: ICard[] = Array.from({ length: level * level }).map((_, i = 1) => {
        return (i % 2 === 0) ? { id: i, image: "", visible: false } : { id: i - 1, image: "", visible: false }
    }).sort(() => Math.random() - 0.5)
    return cards;
}

export const isFinished = (cards: ICard[]): boolean => {
    return cards.every((card) => card.visible);
}
