import './_pages.css'
import Navbar from '../Components/gameComponents/navBar/navbar'
import CardsList from '../Components/gameComponents/cardList/cardsList'
import GameFinished from '../Components/gameComponents/Finished/Finished'
import { useGame } from '../hooks/game.hook'
function Game() {
    const { cardsList, dispatch, game } = useGame();
    return (
        <div className='game-screen'>
            <Navbar />
            <CardsList CardsList={cardsList} dispatch={dispatch} />
            {game.finished && <GameFinished />}

        </div>
    )
}

export default Game