import Card from '../carditem/card'
import React, { useContext } from 'react'
import './cardsList.css'
import { GameContext } from '../../../providers/gameContext';
import type { Action } from '../../../state/reducer';
import type { ICard } from '../../../types/@types';

interface IProps {
    CardsList: ICard[];
    dispatch: React.Dispatch<Action>;
}
function CardsList(props: IProps) {
    const { game } = useContext(GameContext);
    return (
        <div className={`wrapper list-${game.level}`}>
            {props.CardsList.map((card, index) => (
                <Card
                    data={card}
                    key={`card-${index}-${card.id}`}
                    index={index}
                    dispatch={props.dispatch}
                />
            ))}
        </div >
    )
}

export default CardsList