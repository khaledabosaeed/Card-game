import React, { useContext, useState } from 'react';
import { GameContext } from '../../providers/gameContext';
import { Levels } from '../../types/@types';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginComponent() {
  const { setGame } = useContext(GameContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [level, setLevel] = useState<Levels | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');

    // Validation
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters long.');
      return;
    }

    if (level === null) {
      setError('Please select a difficulty level.');
      return;
    }

    setGame((old) => ({ ...old, name: name.trim(), level }));
    navigate('/game');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Start Your Game</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        value={name}
        aria-label="Player name input"
      />
      {error && <p className="error-message">{error}</p>}
      <div className="level-buttons" role="group" aria-label="Difficulty level">
        <button
          className={`level-btn ${level === Levels.HARD ? 'active' : ''}`}
          onClick={() => setLevel(Levels.HARD)}
          aria-pressed={level === Levels.HARD}
        >
          Hard
        </button>
        <button
          className={`level-btn ${level === Levels.MEDIUM ? 'active' : ''}`}
          onClick={() => setLevel(Levels.MEDIUM)}
          aria-pressed={level === Levels.MEDIUM}
        >
          Medium
        </button>
        <button
          className={`level-btn ${level === Levels.EASY ? 'active' : ''}`}
          onClick={() => setLevel(Levels.EASY)}
          aria-pressed={level === Levels.EASY}
        >
          Easy
        </button>
      </div>
      <button
        className="start-btn"
        onClick={handleSubmit}
        disabled={!name.trim() || level === null}
      >
        Start Game
      </button>
    </div>
  );
}

export default LoginComponent;
