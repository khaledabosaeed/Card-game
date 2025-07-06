import { useEffect } from 'react';
import './_pages.css'
import type { IScore } from '../types/@types';
import { useState } from 'react';
import './_pages.css';
const getScore = (): IScore[] => {
    const ScoreBord: IScore[] = JSON.parse(localStorage.getItem('scoreBoard') || '[]');
    return ScoreBord;
}
function Score() {
    const [savedData, SetSavedData] = useState<IScore[]>([]);
    useEffect(() => {
        const saved = getScore();
        console.log(saved);

        SetSavedData(saved);
    }, [])
    return (
        <div className="score-page">
            <h2>🏆 Leaderboard</h2>
            <ul className="score-list">
                {savedData.map((score, index) => (
                    <li key={index} className="score-entry">
                        <span><strong>{index + 1}.</strong> {score.palyerName}</span>
                        <span>⭐{score.level / 2}</span>
                        <span>{score.moves} moves</span>
                        <span>{score.time}s</span>
                    </li>
                ))}
            </ul>
        </div>)
}

export default Score