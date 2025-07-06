import { useReducer, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../providers/gameContext";
import { gameReducer } from "../state/reducer";
import { isFinshied } from "../utils/game.utils";

export const useGame = () => {
    const [cardList, dispatch] = useReducer(gameReducer, { CardsList: [], moves: 0, initalized: false, listOfFlipped: [], visible: false });
    const { game, setGame } = useContext(GameContext);
    const timer = useRef(0);
    const navigate = useNavigate();
    useEffect(() => {

        if (!cardList.initalized) {
            dispatch({ type: 'init', playload: { level: game.level } })
            timer.current = setInterval(() => {
                setGame((old) => ({ ...old, time: old.time + 1 }));
            }, 1000)
        }
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    useEffect(() => {
        if (!cardList.initalized) return;
        if (cardList.listOfFlipped.length === 2) {
            setTimeout(() => {
                dispatch({ type: "mismatch" });
                setGame({ ...game, moves: game.moves + 1 });
            }, 2000)
        }
        const Finished = isFinshied(cardList.CardsList);
        if (Finished) {
            setGame(old => ({ ...old, finished: true }));
            clearInterval(timer.current)
            setTimeout(() => {
                navigate('/Score')
            }, 3000)
        }
    }, [cardList.listOfFlipped])
    return {
        cardsList: cardList.CardsList, dispatch, game
    }
}
