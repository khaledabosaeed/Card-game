import "./card.css"
import type { ICard } from '../../../types/@types'
import type { Action } from "../../../state/reducer";
interface Iprops {
    data: ICard
    index: number;
    dispatch: React.Dispatch<Action>;
}
function Card({ data, dispatch, index }: Iprops) {
    return (
        <div className={data.visible ? "Card flipped matched " : "Card"}
            style={{
                backgroundImage:
                    data.visible
                        ? `url(https://api.clipart.com/img/previews/icon-set-${data.id + 1}.png)`
                        : 'url(https://api.clipart.com/img/previews/icon-set-98.png)'
            }}
            onClick={() => dispatch({ type: 'flip card', playload: { id: data.id, index: index } })}>
        </div >
    )
}
export default Card;