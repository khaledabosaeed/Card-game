import './finished.css';



const GameFinished = () => {
    return (
        <div className="game-finished">
            <div className="icon">🎉</div>
            <h2 className="title">Game Finished!</h2>
            <p className="message">You matched all the cards. Well done!</p>
        </div>
    );
};

export default GameFinished;