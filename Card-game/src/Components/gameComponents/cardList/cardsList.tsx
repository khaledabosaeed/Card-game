import Card from '../carditem/card'
import React, { useContext } from 'react'
import './cardsList.css'
import { GameContext } from '../../../providers/gameContext';
import type { Action } from '../../../state/reducer';
import type { ICard } from '../../../types/@types';

interface Iprops {
    CardsList: ICard[];
    dispatch: React.Dispatch<Action>;
}
function CardsList(props: Iprops) {
    const { game } = useContext(GameContext);
    return (
        <div className={`wrapper list-${game.level}`}>
            {props.CardsList.map((elm, i) => <Card data={elm} key={i} index={i} dispatch={props.dispatch} />)}

        </div >
    )
}

export default CardsList