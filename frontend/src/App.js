import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [motivation, setMotivation] = useState('');
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!input.trim()) {
      setMotivation('Please describe how you feel to get emotional support.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/generate-motivation', {
        text: input,
      });
      setMotivation(response.data.motivation);
    } catch (error) {
      console.error('Error generating motivation:', error);
      setMotivation('Failed to generate motivation. Please try again.');
    }
  };

  return (
    <div className="app">
      <div className="navbar">
        <button className="navButton" onClick={() => navigate('/psychologists')}>
          Psychologists
        </button>
        <button className="navButton" onClick={() => navigate('/post-emotion')}>
          Post Emotion
        </button>
        <button className="navButton" onClick={() => navigate('/about')}>
          About
        </button>
      </div>

      <div className="container">
        <h1 className="heading">SoulSync</h1>
        <p className="subheading">Your Emotional Support Companion</p>

        <div className="input-container">
          <textarea
            className={`textarea ${motivation ? 'shrink-textarea' : ''}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe how you feel..."
          />
          <button className="button" onClick={handleGenerate}>🡹</button>
        </div>

        {motivation && (
          <div className="motivation">
            <h2>Here's your support:</h2>
            <div className="motivationText">{motivation}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
