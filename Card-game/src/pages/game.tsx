import React from 'react'
import './_pages.css'
import Navbar from '../Components/gameComponents/navBar/navbar'
import CardsList from '../Components/gameComponents/cardList/cardsList'
function Game() {
    return (
        <div className='game-screen'>
            <Navbar />
            <CardsList />
        </div>
    )
}

export default Game