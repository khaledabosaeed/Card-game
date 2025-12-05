import './finished.css';

const GameFinished = () => {
    return (
        <div
            className="game-finished"
            role="alert"
            aria-live="polite"
            aria-label="Game completion announcement"
        >
            <div className="icon" aria-hidden="true">🎉</div>
            <h2 className="title">Game Finished!</h2>
            <p className="message">You matched all the cards. Well done! Redirecting to leaderboard...</p>
        </div>
    );
};

export default GameFinished;