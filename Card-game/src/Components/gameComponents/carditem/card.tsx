import React from 'react'
import "./card.css"
import type { ICard } from '../../../types/@types'
interface Iprops {
    data: ICard
}
function Card(Props: Iprops) {
    return (
        <div className='Card'>
            {Props.data.id}
        </div>
    )
}

export default Card