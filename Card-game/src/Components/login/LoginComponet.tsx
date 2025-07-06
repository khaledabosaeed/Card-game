import React, { useContext, useState } from 'react';
import { GameContext } from '../../providers/gameContext';
import { Elevels } from '../../types/@types';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginComponent() {
  const { setGame } = useContext(GameContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [level, setLevel] = useState<Elevels | null>(null);

  const handleSubmit = () => {
    if (!name || level === null) {
      alert('Please enter a name and select a level.');
      return;
    }

    setGame((old) => ({ ...old, name, level }));
    navigate('/game');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Start Your Game</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <div className="level-buttons">
        <button
          className={`level-btn ${level === Elevels.Hard ? 'active' : ''}`}
          onClick={() => setLevel(Elevels.Hard)}
        >
          Hard
        </button>
        <button
          className={`level-btn ${level === Elevels.MEDIUM ? 'active' : ''}`}
          onClick={() => setLevel(Elevels.MEDIUM)}
        >
          Medium
        </button>
        <button
          className={`level-btn ${level === Elevels.EASY ? 'active' : ''}`}
          onClick={() => setLevel(Elevels.EASY)}
        >
          Easy
        </button>
      </div>
      <button className="start-btn" onClick={handleSubmit}>
        Start Game
      </button>
    </div>
  );
}

export default LoginComponent;
