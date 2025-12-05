import { useReducer, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../providers/gameContext";
import { gameReducer } from "../state/reducer";
import { isFinished } from "../utils/game.utils";
import type { IScore } from "../types/@types";

const saveGameScore = (score: IScore): void => {
    try {
        const existing = localStorage.getItem('scoreBoard');
        const scores: IScore[] = existing ? JSON.parse(existing) : [];
        scores.push(score);
        localStorage.setItem('scoreBoard', JSON.stringify(scores));
    } catch (error) {
        console.error('Failed to save game score:', error);
    }
};

export const useGame = () => {
    const [cardList, dispatch] = useReducer(gameReducer, { cardsList: [], moves: 0, initialized: false, listOfFlipped: [], visible: false });
    const { game, setGame, resetGame } = useContext(GameContext);
    const timer = useRef<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cardList.initialized) {
            dispatch({ type: 'init', payload: { level: game.level } })
            timer.current = setInterval(() => {
                setGame((old) => ({ ...old, time: old.time + 1 }));
            }, 1000)
        }
        return () => {
            if (timer.current) {
                clearInterval(timer.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!cardList.initialized) return;

        if (cardList.listOfFlipped.length === 2) {
            const [first, second] = cardList.listOfFlipped;
            const isMatch = cardList.cardsList[first].id === cardList.cardsList[second].id;

            setTimeout(() => {
                if (!isMatch) {
                    dispatch({ type: "mismatch" });
                }
                setGame({ ...game, moves: game.moves + 1 });
            }, 2000)
        }

        const finished = isFinished(cardList.cardsList);
        if (finished) {
            setGame(old => ({ ...old, finished: true }));
            if (timer.current) {
                clearInterval(timer.current)
            }

            saveGameScore({
                playerName: game.name,
                time: game.time,
                moves: game.moves,
                level: game.level
            })

            setTimeout(() => {
                resetGame();
                navigate('/score')
            }, 3000)
        }
    }, [cardList.listOfFlipped])

    return {
        cardsList: cardList.cardsList, dispatch, game
    }
}
