import { useContext } from 'react'
import "./navbar.css"
import { GameContext } from '../../../providers/gameContext'

function Navbar() {
    const { game } = useContext(GameContext)
    const stars = Array.from({ length: game.level / 2 }).map(() => '⭐').join('')

    return (
        <div className='Bar' role="status" aria-live="polite" aria-label="Game information bar">
            <ul className='nav'>
                <li aria-label={`Player name: ${game.name}`}>
                    <strong>👤</strong> {game.name}
                </li>
                <li aria-label={`Difficulty level: ${game.level / 2} stars`}>
                    <strong>⭐ Level:</strong> {stars}
                </li>
                <li aria-label={`Attempts: ${game.moves}`}>
                    <strong>🎯 Moves:</strong> {game.moves}
                </li>
                <li aria-label={`Elapsed time: ${game.time} seconds`}>
                    <strong>⏱️ Time:</strong> {game.time}s
                </li>
            </ul>
        </div>
    )
}

export default Navbar