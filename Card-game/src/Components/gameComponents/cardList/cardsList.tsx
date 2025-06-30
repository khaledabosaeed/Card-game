import Card from '../carditem/card'
import React, { useState } from 'react'
import './cardsList.css'
import { Elevels } from '../../../types/@types'
import { cardgenertor } from '../../../utils/game.utils';

const CurrantLevel = Elevels.Hard;

function CardsList() {
    const [CardsList, SetCardsList] = useState(cardgenertor(CurrantLevel))
    return (
        <div className={`wrapper list-${CurrantLevel}`}>
            {CardsList.map((elm, i) => <Card data={elm} key={i} />)
            }

        </div >
    )
}

export default CardsList