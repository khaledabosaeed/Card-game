import { useContext, useEffect, useReducer } from 'react'
import './_pages.css'
import Navbar from '../Components/gameComponents/navBar/navbar'
import { gameReducer } from '../state/reducer'
import { GameContext } from '../providers/gameContext'
import CardsList from '../Components/gameComponents/cardList/cardsList'
function Game() {
    const [cardList, dispatch] = useReducer(gameReducer, { CardsList: [], moves: 0, initalized: false, listOfFlipped: [], visible: false });
    const level = useContext(GameContext)
    useEffect(() => {
        if (!cardList.initalized) {
            dispatch({ type: 'init', playload: { level: level.game.level } })
        }
    }, [])
    useEffect(() => {
        if (cardList.listOfFlipped.length === 2) {
            setTimeout(() => {
                dispatch({ type: "mismatch" });
            }, 2000)
        }
    }, [cardList.listOfFlipped])

    return (
        <div className='game-screen'>
            <Navbar />
            <CardsList CardsList={cardList.CardsList} dispatch={dispatch} />
        </div>
    )
}

export default Game