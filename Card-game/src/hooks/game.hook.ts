import { useReducer, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../providers/gameContext";
import { gameReducer } from "../state/reducer";
import { isFinshied } from "../utils/game.utils";
import type { IScore } from "../types/@types";

const setGameBord = (score: IScore) => {
    const existing = localStorage.getItem('scoreBoard');
    const scores: IScore[] = existing ? JSON.parse(existing) : [];
    scores.push(score);
    localStorage.setItem('scoreBoard', JSON.stringify(scores));
};
export const useGame = () => {
    const [cardList, dispatch] = useReducer(gameReducer, { CardsList: [], moves: 0, initalized: false, listOfFlipped: [], visible: false });
    const { game, setGame,resetGame } = useContext(GameContext);
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
            resetGame();
            setGameBord({
                palyerName: game.name,
                time: game.time,
                moves: game.moves,
                level: game.level
            })
            setTimeout(() => {
                navigate('/Score')
            }, 3000)
        }
    }, [cardList.listOfFlipped])
    return {
        cardsList: cardList.CardsList, dispatch, game
    }
}
