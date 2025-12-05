import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './_pages.css'
import Navbar from '../Components/gameComponents/navBar/navbar'
import CardsList from '../Components/gameComponents/cardList/cardsList'
import GameFinished from '../Components/gameComponents/Finished/Finished'
import { useGame } from '../hooks/game.hook'
import { GameContext } from '../providers/gameContext';

function Game() {
    const { cardsList, dispatch, game } = useGame();
    const { game: contextGame } = useContext(GameContext);
    const navigate = useNavigate();

    // Guard: Check if user is logged in
    useEffect(() => {
        if (!contextGame.name) {
            navigate('/');
        }
    }, [contextGame.name, navigate]);

    if (!contextGame.name) {
        return null;
    }

    return (
        <div className='game-screen'>
            <Navbar />
            <CardsList CardsList={cardsList} dispatch={dispatch} />
            {game.finished && <GameFinished />}
        </div>
    )
}

export default Game