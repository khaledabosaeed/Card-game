import { useContext, useEffect, useReducer, useRef } from 'react'
import './_pages.css'
import Navbar from '../Components/gameComponents/navBar/navbar'
import { gameReducer } from '../state/reducer'
import { GameContext } from '../providers/gameContext'
import CardsList from '../Components/gameComponents/cardList/cardsList'
import { isFinshied } from '../utils/game.utils'
import GameFinished from '../Components/gameComponents/Finished/Finished'
import { useNavigate } from 'react-router-dom'
function Game() {
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

    return (
        <div className='game-screen'>
            <Navbar />
            <CardsList CardsList={cardList.CardsList} dispatch={dispatch} />
            {game.finished && <GameFinished />}

        </div>
    )
}

export default Game