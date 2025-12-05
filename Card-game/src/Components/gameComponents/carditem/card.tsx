import "./card.css"
import type { ICard } from '../../../types/@types'
import type { Action } from "../../../state/reducer";

interface IProps {
    data: ICard
    index: number;
    dispatch: React.Dispatch<Action>;
}

const EMOJI_SET = ['🎵', '🎨', '🎮', '🏆', '🎭', '🎪', '🎬', '🎤', '🎸', '🎹', '🎺', '🎻'];

function Card({ data, dispatch, index }: IProps) {
    const emoji = EMOJI_SET[data.id % EMOJI_SET.length];

    return (
        <div
            className={data.visible ? "Card flipped matched" : "Card"}
            onClick={() => dispatch({ type: 'flip card', payload: { id: data.id, index } })}
            role="button"
            tabIndex={0}
            aria-label={`Card ${index + 1}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dispatch({ type: 'flip card', payload: { id: data.id, index } });
                }
            }}
            style={{
                fontSize: data.visible ? '2rem' : '0',
            }}
        >
            {data.visible && emoji}
        </div>
    )
}

export default Card;