import React, { useContext } from 'react'
import "./navbar.css"
import { GameContext } from '../../../providers/gameContext'

function Navbar() {
    const { game } = useContext(GameContext)
    return (
        <div className='Bar'>
            <ul className='nav'>
                <li>name:{game.name} </li>
                <li>level: {Array.from({ length: game.level / 2 }).map(() => '⭐')}</li>
                <li>try: {game.moves}</li>
                <li>time: {game.time}s</li>
            </ul>
        </div>
    )
}

export default Navbar