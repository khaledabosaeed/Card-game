import type { Elevels, ICard } from "../types/@types";


export const cardgenertor = (level: Elevels): ICard[] => {
    const Cards: ICard[] = Array.from({ length: level * level }).map((_, i = 1) => {
        return (i % 2 === 0) ? { id: i, image: "", visible: false } : { id: i - 1, image: "", visible: false }
    }).sort(() => Math.random() - .5)
    return Cards;
}   

