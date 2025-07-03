import "./card.css"
import type { ICard } from '../../../types/@types'
import { useState } from "react"
interface Iprops {
    data: ICard
}

function Card({ data }: Iprops) {
    const [visible, setvisible] = useState(data.visible)

    return (
        <div className={visible ? "Card flipped" : "Card"}
            style={{
                backgroundImage:
                    visible
                        ? `url(https://api.clipart.com/img/previews/icon-set-${data.id + 1}.png)`
                        : 'url(https://api.clipart.com/img/previews/icon-set-98.png)'
            }}
            onClick={() => setvisible(!visible)}
        >
        </div >
    )
}

export default Card