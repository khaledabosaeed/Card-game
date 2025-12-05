import { useEffect } from 'react';
import './_pages.css'
import type { IScore } from '../types/@types';
import { useState } from 'react';

const getScores = (): IScore[] => {
    try {
        const scoreBoard: IScore[] = JSON.parse(localStorage.getItem('scoreBoard') || '[]');
        return scoreBoard;
    } catch (error) {
        console.error('Failed to load scores:', error);
        return [];
    }
}

const sortScores = (scores: IScore[]): IScore[] => {
    return [...scores].sort((a, b) => {
        // Primary: sort by moves (ascending)
        if (a.moves !== b.moves) {
            return a.moves - b.moves;
        }
        // Secondary: sort by time (ascending)
        return a.time - b.time;
    });
}

function Score() {
    const [savedData, setSavedData] = useState<IScore[]>([]);

    useEffect(() => {
        const scores = getScores();
        const sorted = sortScores(scores);
        setSavedData(sorted);
    }, [])

    return (
        <div className="score-page">
            <h2>🏆 Leaderboard</h2>
            {savedData.length === 0 ? (
                <p>No games played yet. Play a game to appear here!</p>
            ) : (
                <ul className="score-list">
                    {savedData.map((score, index) => (
                        <li key={`${score.playerName}-${score.time}-${index}`} className="score-entry">
                            <span><strong>{index + 1}.</strong> {score.playerName}</span>
                            <span>⭐{score.level / 2}</span>
                            <span>{score.moves} moves</span>
                            <span>{score.time}s</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Score